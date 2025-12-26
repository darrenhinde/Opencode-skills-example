#!/bin/bash

# Array of random words to show the script is actually running
WORDS=("quantum" "nebula" "crystal" "phoenix" "thunder" "eclipse" "cascade" "horizon" "velocity" "spectrum" "catalyst" "zenith" "aurora" "prism" "vortex")

# Function to get random word
get_random_word() {
  echo "${WORDS[$((RANDOM % ${#WORDS[@]}))]}"
}

echo "=========================================="
echo "Tier 2: Steps Skill - Helper Script Demo"
echo "=========================================="
echo ""

echo "Step 1: Initialize $(get_random_word) process"
sleep 0.5
echo "  ✓ Completed with $(get_random_word) result"
echo ""

echo "Step 2: Validate $(get_random_word) configuration"
sleep 0.5
echo "  ✓ Completed with $(get_random_word) result"
echo ""

echo "Step 3: Execute $(get_random_word) workflow"
sleep 0.5
echo "  ✓ Completed with $(get_random_word) result"
echo ""

echo "Step 4: Finalize $(get_random_word) output"
sleep 0.5
echo "  ✓ Completed with $(get_random_word) result"
echo ""

echo "=========================================="
echo "All steps completed successfully! 🎉"
echo "=========================================="
