# 🎯 OpenCode Skills Showcase

A **3-tier demonstration** of OpenCode Skills showing how they work with increasing complexity. Perfect for understanding the architecture and capabilities of OpenCode Skills.

---

## 📖 Quick Overview

OpenCode Skills are modular, file-based systems that give AI agents reusable capabilities. This showcase demonstrates:

1. **Tier 1**: Simple skill with just instructions
2. **Tier 2**: Skill with helper scripts
3. **Tier 3**: Advanced skill with multiple scripts + custom tools

---

## 🎓 Tier 1: Simple (POC)

### What It Shows
- ✅ Minimal skill structure
- ✅ Using built-in `bash` tool
- ✅ One-liner execution

### Location
```
.opencode/skill/hello-skill/
└── SKILL.md
```

### The Skill
```markdown
---
name: hello-skill
description: Prints a greeting message
---

## What I do

I'm the simplest skill possible. I just print a hello message using the bash tool.

## How to use me

Run this command:

```bash
echo "Hello from Tier 1 skill! 🎉"
```
```

### How It Works
1. Agent loads the skill
2. Agent reads SKILL.md
3. Agent uses `bash` tool to execute: `echo "Hello from Tier 1 skill! 🎉"`
4. Output appears in console

### Key Concept
**Skills are instructions, not code.** The SKILL.md tells the agent what to do. The agent decides which tools to use.

---

## 🎓 Tier 2: Intermediate

### What It Shows
- ✅ Skills with helper scripts
- ✅ Ordered execution with console output
- ✅ Random words proving actual execution
- ✅ Multi-step workflows

### Location
```
.opencode/skill/steps-skill/
├── SKILL.md
└── steps.sh
```

### The Skill
```markdown
---
name: steps-skill
description: Runs a script that prints ordered execution steps
---

## What I do

I demonstrate how skills can use helper scripts. I run a script that prints 
numbered steps with random words to show execution flow.

## How to use me

Run the helper script from my base directory:

```bash
cd {base_directory}
bash steps.sh
```
```

### The Helper Script
```bash
#!/bin/bash

# Array of random words
WORDS=("quantum" "nebula" "crystal" "phoenix" "thunder" ...)

echo "Step 1: Initialize $(get_random_word) process"
echo "Step 2: Validate $(get_random_word) configuration"
echo "Step 3: Execute $(get_random_word) workflow"
echo "Step 4: Finalize $(get_random_word) output"
```

### How It Works
1. Agent loads the skill
2. Agent reads SKILL.md instructions
3. Agent uses `bash` tool to execute `steps.sh`
4. Script prints 4 ordered steps with random words
5. Output shows execution flow and control

### Example Output
```
==========================================
Tier 2: Steps Skill - Helper Script Demo
==========================================

Step 1: Initialize thunder process
  ✓ Completed with prism result

Step 2: Validate prism configuration
  ✓ Completed with aurora result

Step 3: Execute aurora workflow
  ✓ Completed with aurora result

Step 4: Finalize prism output
  ✓ Completed with crystal result

==========================================
All steps completed successfully! 🎉
==========================================
```

### Key Concept
**Helper scripts are portable.** They can be bash, python, or any language. The agent executes them using the `bash` tool.

---

## 🎓 Tier 3: Advanced

### What It Shows
- ✅ Multiple helper scripts working together
- ✅ Sequential execution with full visibility
- ✅ Integration with custom tools
- ✅ Complete workflow orchestration

### Location
```
.opencode/skill/workflow-skill/
├── SKILL.md
├── script1.sh    (Initialization Phase)
├── script2.sh    (Validation Phase)
├── script3.sh    (Execution Phase)
└── script4.sh    (Finalization Phase)

.opencode/tool/
└── print-tool.ts (Custom tool for summary)
```

### The Skill
```markdown
---
name: workflow-skill
description: Demonstrates script and custom tool working together
---

## What I do

I'm the most advanced skill in this showcase. I demonstrate how multiple 
helper scripts work together in a workflow, and how they can integrate 
with custom tools.

## How to use me

Execute the workflow scripts in order from my base directory:

```bash
cd {base_directory}

bash script1.sh
bash script2.sh
bash script3.sh
bash script4.sh
```

Then use the custom `print-tool` to generate a final summary.
```

### The Helper Scripts

**script1.sh** - Initialization Phase
```bash
echo "🔵 Starting workflow with: ${WORDS[$((RANDOM % ${#WORDS[@]}))]}"
echo "   Random ID: $(shuf -i 1000-9999 -n 1)"
echo "   Timestamp: $(date '+%Y-%m-%d %H:%M:%S')"
```

**script2.sh** - Validation Phase
```bash
echo "🟡 Validating with: ${WORDS[$((RANDOM % ${#WORDS[@]}))]}"
echo "   Status: RUNNING"
echo "   Progress: [████████░░] 80%"
```

**script3.sh** - Execution Phase
```bash
echo "🟠 Executing: ${WORDS[$((RANDOM % ${#WORDS[@]}))]}"
echo "   Operations: $(shuf -i 100-999 -n 1) tasks"
echo "   Duration: $(shuf -i 1-10 -n 1)s"
```

**script4.sh** - Finalization Phase
```bash
echo "🟢 Finalizing: ${WORDS[$((RANDOM % ${#WORDS[@]}))]}"
echo "   Result: SUCCESS"
echo "   Exit Code: 0"
```

### The Custom Tool

**print-tool.ts** - TypeScript tool for final summary
```typescript
import { tool } from "@opencode-ai/plugin"

export default tool({
  description: "Print a summary message with random words",
  args: {
    title: tool.schema.string().optional(),
  },
  async execute(args) {
    const word1 = getRandomWord()
    const word2 = getRandomWord()
    const word3 = getRandomWord()

    return `
╔════════════════════════════════════════════════════════════════╗
║                    Workflow Summary                            ║
╚════════════════════════════════════════════════════════════════╝

🎯 Custom Tool Output:
   This is a ${word1} demonstration of how custom tools work!
   The workflow was ${word2} and the results are ${word3}.
   
✨ This shows how OpenCode Skills combine:
   ✓ Helper scripts (bash, python, etc.)
   ✓ Custom tools (TypeScript)
   ✓ Built-in tools (bash, read, write)
   ✓ Complete orchestration and control

🎉 Tier 3 Workflow Complete!
`
  },
})
```

### How It Works
1. Agent loads the skill
2. Agent reads SKILL.md instructions
3. Agent executes script1.sh → script2.sh → script3.sh → script4.sh in sequence
4. Each script prints its phase with random words and status
5. Agent calls custom `print-tool` to generate final summary
6. Output shows complete workflow with full control and visibility

### Example Output
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCRIPT 1: Initialization Phase
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔵 Starting workflow with: start
   Random ID: 2728
   Timestamp: 2025-12-26 15:16:13

✓ Script 1 completed successfully

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCRIPT 2: Validation Phase
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🟡 Validating with: validate
   Status: RUNNING
   Progress: [████████░░] 80%

✓ Script 2 completed successfully

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCRIPT 3: Execution Phase
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🟠 Executing: carry
   Operations: 992 tasks
   Duration: 3s

✓ Script 3 completed successfully

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCRIPT 4: Finalization Phase
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🟢 Finalizing: terminate
   Result: SUCCESS
   Exit Code: 0

✓ Script 4 completed successfully
```

### Key Concept
**Custom tools extend functionality.** TypeScript tools in `.opencode/tool/` are available to all skills and provide specialized functionality.

---

## 📊 Comparison Table

| Feature | Tier 1 | Tier 2 | Tier 3 |
|---------|--------|--------|--------|
| **Complexity** | Minimal | Medium | Advanced |
| **Files** | 1 | 2 | 5 + custom tool |
| **Helper Scripts** | 0 | 1 | 4 |
| **Custom Tools** | No | No | Yes |
| **Use Case** | POC | Workflows | Complex Systems |
| **Learning Curve** | Instant | Easy | Moderate |
| **Execution Time** | <1s | ~2s | ~4s |

---

## 🔑 Key Concepts

### 1. Skills Are Instructions, Not Code
- SKILL.md files contain instructions for the agent
- They tell the agent *what* to do and *how* to do it
- The agent decides which tools to use

### 2. Scripts Are Portable
- Helper scripts can be bash, python, or any language
- They live alongside the skill definition
- The agent executes them using the `bash` tool

### 3. Custom Tools Extend Functionality
- TypeScript tools in `.opencode/tool/` are available to all skills
- They provide specialized functionality
- The agent calls them directly

### 4. Full Visibility and Control
- Console output shows exactly what's happening
- Random words prove actual execution (not hallucination)
- Agent can see results and make decisions

### 5. Just-in-Time Loading
- Agent doesn't load all skills at once
- Skills are loaded on-demand when needed
- Keeps context lightweight and focused

---

## 🚀 How to Use This Showcase

### For Learning
1. Start with Tier 1 - understand basic structure
2. Move to Tier 2 - see how scripts work
3. Advance to Tier 3 - see full orchestration

### For Demonstration
```bash
# Show Tier 1
echo "=== TIER 1: Simple ==="
echo "Hello from Tier 1 skill! 🎉"

# Show Tier 2
echo ""
echo "=== TIER 2: Intermediate ==="
bash .opencode/skill/steps-skill/steps.sh

# Show Tier 3
echo ""
echo "=== TIER 3: Advanced ==="
bash .opencode/skill/workflow-skill/script1.sh
bash .opencode/skill/workflow-skill/script2.sh
bash .opencode/skill/workflow-skill/script3.sh
bash .opencode/skill/workflow-skill/script4.sh
```

### For Integration
Copy the `.opencode/` directory structure to your project:
```bash
cp -r .opencode/ your-project/
```

Then customize the skills for your specific needs!

---

## 💡 Key Takeaways

✅ **Skills are modular** - Each skill is self-contained and reusable
✅ **Scripts are powerful** - Simple bash/python scripts can do complex work
✅ **Tools extend capabilities** - Custom TypeScript tools add specialized functionality
✅ **Full visibility** - Console output shows exactly what's happening
✅ **No hallucination** - Random output proves actual execution, not AI guessing
✅ **Just-in-time loading** - Agent stays focused with on-demand skill loading

---

## 📁 Directory Structure

```
.opencode/
├── skill/
│   ├── hello-skill/              # TIER 1: Simple
│   │   └── SKILL.md
│   ├── steps-skill/              # TIER 2: Intermediate
│   │   ├── SKILL.md
│   │   └── steps.sh
│   └── workflow-skill/           # TIER 3: Advanced
│       ├── SKILL.md
│       ├── script1.sh
│       ├── script2.sh
│       ├── script3.sh
│       └── script4.sh
└── tool/
    └── print-tool.ts             # Custom tool for Tier 3
```

---

## 📖 Further Reading

- [OpenCode Skills Documentation](https://opencode.ai/docs/skills/)
- [OpenCode GitHub](https://github.com/sst/opencode)
- [Model Context Protocol (MCP)](https://modelcontextprotocol.io/)

---

**Created to showcase OpenCode Skills architecture and capabilities** 🎯
