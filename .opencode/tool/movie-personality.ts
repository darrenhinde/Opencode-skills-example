#!/usr/bin/env bun

/**
 * Movie Personality Tool
 * 
 * Loads a movie character personality and runs their themed workflow script.
 * Reads mission configuration to determine which variant to execute.
 */

import { parseArgs } from "util";
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { spawnSync } from "child_process";

interface MissionConfig {
  name: string;
  alignment?: string;
  team?: string;
  method?: string;
  description: string;
}

interface CharacterConfig {
  mission: number;
  missions: {
    [key: string]: MissionConfig;
  };
}

interface PersonalityConfig {
  [character: string]: CharacterConfig;
}

const AVAILABLE_CHARACTERS = {
  yoda: "Wise Jedi Master from Star Wars",
  stark: "Genius billionaire Tony Stark from Iron Man",
  sherlock: "Master detective Sherlock Holmes"
};

function loadConfig(): PersonalityConfig {
  const configPath = join(process.cwd(), ".opencode/skill/smart-router-skill/config/personality-config.json");
  
  if (!existsSync(configPath)) {
    console.error("❌ Error: personality-config.json not found");
    console.error(`   Expected at: ${configPath}`);
    process.exit(1);
  }

  try {
    const configData = readFileSync(configPath, "utf-8");
    return JSON.parse(configData);
  } catch (error) {
    console.error("❌ Error: Failed to parse personality-config.json");
    console.error(`   ${error}`);
    process.exit(1);
  }
}

function runCharacterScript(character: string, mission: number, missionConfig: MissionConfig): void {
  const scriptPath = join(
    process.cwd(),
    ".opencode/skill/smart-router-skill/scripts",
    `${character}-workflow.sh`
  );

  if (!existsSync(scriptPath)) {
    console.error(`❌ Error: Script not found for character '${character}'`);
    console.error(`   Expected at: ${scriptPath}`);
    process.exit(1);
  }

  console.log(`\n🎬 Loading ${character.toUpperCase()} personality...\n`);

  // Run the script with mission number as argument
  const result = spawnSync("bash", [scriptPath, mission.toString()], {
    stdio: "inherit",
    env: {
      ...process.env,
      MISSION: mission.toString(),
      MISSION_NAME: missionConfig.name,
      MISSION_DESC: missionConfig.description
    }
  });

  if (result.error) {
    console.error(`❌ Error executing script: ${result.error.message}`);
    process.exit(1);
  }

  if (result.status !== 0) {
    console.error(`❌ Script exited with code ${result.status}`);
    process.exit(result.status || 1);
  }

  // Output mission results for agent to parse
  console.log("\n📊 MISSION RESULTS:");
  console.log(`   Character: ${character}`);
  console.log(`   Mission: ${missionConfig.name}`);
  if (missionConfig.alignment) console.log(`   Alignment: ${missionConfig.alignment}`);
  if (missionConfig.team) console.log(`   Team: ${missionConfig.team}`);
  if (missionConfig.method) console.log(`   Method: ${missionConfig.method}`);
  console.log("");
}

function main() {
  const { values } = parseArgs({
    args: process.argv.slice(2),
    options: {
      character: {
        type: "string",
        short: "c"
      },
      help: {
        type: "boolean",
        short: "h"
      }
    }
  });

  if (values.help) {
    console.log(`
🎬 Movie Personality Tool

Usage:
  movie-personality --character <name>

Available Characters:
${Object.entries(AVAILABLE_CHARACTERS).map(([key, desc]) => `  - ${key}: ${desc}`).join('\n')}

Examples:
  movie-personality --character yoda
  movie-personality --character stark
  movie-personality --character sherlock

Configuration:
  Edit .opencode/skill/smart-router-skill/config/personality-config.json
  to change mission settings (1 or 2) for each character.
`);
    process.exit(0);
  }

  if (!values.character) {
    console.error("❌ Error: --character parameter is required");
    console.error("\nAvailable characters:");
    Object.entries(AVAILABLE_CHARACTERS).forEach(([key, desc]) => {
      console.error(`  - ${key}: ${desc}`);
    });
    console.error("\nUsage: movie-personality --character <name>");
    process.exit(1);
  }

  const character = values.character.toLowerCase();

  if (!AVAILABLE_CHARACTERS[character as keyof typeof AVAILABLE_CHARACTERS]) {
    console.error(`❌ Error: Unknown character '${character}'`);
    console.error("\nAvailable characters:");
    Object.entries(AVAILABLE_CHARACTERS).forEach(([key, desc]) => {
      console.error(`  - ${key}: ${desc}`);
    });
    process.exit(1);
  }

  const config = loadConfig();
  const characterConfig = config[character];

  if (!characterConfig) {
    console.error(`❌ Error: No configuration found for character '${character}'`);
    process.exit(1);
  }

  const mission = characterConfig.mission;
  const missionConfig = characterConfig.missions[mission.toString()];

  if (!missionConfig) {
    console.error(`❌ Error: Invalid mission number ${mission} for character '${character}'`);
    process.exit(1);
  }

  runCharacterScript(character, mission, missionConfig);
}

main();
