# 🤖 Skills Demo Agent

A simple agent that demonstrates how OpenCode Skills work by executing all three tiers in sequence.

## Quick Start

The demo agent is located at: `.opencode/agent/skills-demo-agent.md`

### How to Use

Simply ask the agent to run the demo:

```
"Run the full skills demo"
```

Or run individual tiers:

```
"Run Tier 1"
"Run Tier 2"
"Run Tier 3"
```

Or ask for explanations:

```
"Explain the hello-skill"
"How does the workflow-skill work?"
"What's the difference between the tiers?"
```

## What the Agent Does

The agent will:

1. **Load each skill** - Read the SKILL.md file
2. **Execute the skill** - Run the scripts or commands
3. **Show the output** - Display results with explanations
4. **Explain the concept** - Tell you what each tier demonstrates

## Example: Full Demo Run

When you ask for the full demo, the agent will:

### Step 1: Tier 1 (Simple)
```
Execute: echo "Hello from Tier 1 skill! 🎉"
Output: Hello from Tier 1 skill! 🎉

Concept: Skills are instructions, not code
```

### Step 2: Tier 2 (Intermediate)
```
Execute: bash .opencode/skill/steps-skill/steps.sh
Output:
  ==========================================
  Tier 2: Steps Skill - Helper Script Demo
  ==========================================
  
  Step 1: Initialize [random word] process
    ✓ Completed with [random word] result
  
  [... more steps ...]

Concept: Helper scripts are portable
```

### Step 3: Tier 3 (Advanced)
```
Execute: bash .opencode/skill/workflow-skill/script{1,2,3,4}.sh
Output:
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  SCRIPT 1: Initialization Phase
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  
  🔵 Starting workflow with: [random word]
  
  [... more scripts ...]

Concept: Custom tools extend functionality
```

## Key Concepts Demonstrated

✅ **Skills are instructions** - SKILL.md tells the agent what to do
✅ **Scripts are portable** - Can be bash, python, or any language
✅ **Tools extend functionality** - Custom TypeScript tools add capabilities
✅ **Full visibility** - Console output shows exactly what's happening
✅ **No hallucination** - Random words prove actual execution
✅ **Just-in-time loading** - Skills load on-demand, keeping context focused

## Agent Features

- **Loads skills on-demand** - Only loads what's needed
- **Executes scripts safely** - Uses bash tool with proper permissions
- **Shows real output** - Displays actual console output, not guesses
- **Explains concepts** - Tells you what each tier demonstrates
- **Answers questions** - Can explain any skill in detail

## Files Involved

```
.opencode/
├── agent/
│   └── skills-demo-agent.md          # The demo agent
├── skill/
│   ├── hello-skill/
│   │   └── SKILL.md
│   ├── steps-skill/
│   │   ├── SKILL.md
│   │   └── steps.sh
│   └── workflow-skill/
│       ├── SKILL.md
│       ├── script1.sh
│       ├── script2.sh
│       ├── script3.sh
│       └── script4.sh
└── tool/
    └── print-tool.ts
```

## Example Interactions

### Full Demo
```
User: "Run the full skills demo"

Agent: I'll demonstrate all three tiers of OpenCode Skills...

[Executes Tier 1]
[Executes Tier 2]
[Executes Tier 3]

Summary: You've now seen how skills progress from simple instructions
to complex workflows with custom tools!
```

### Individual Tier
```
User: "Run Tier 2"

Agent: I'll execute the steps-skill which demonstrates helper scripts...

[Executes steps.sh]

This tier shows how skills can use portable helper scripts that work
with any language (bash, python, etc.).
```

### Explanation
```
User: "How does the workflow-skill work?"

Agent: The workflow-skill is the most advanced tier. It demonstrates:

1. Multiple helper scripts (script1.sh through script4.sh)
2. Sequential execution with full visibility
3. Integration with custom tools (print-tool.ts)
4. Complete workflow orchestration

Let me show you by running it...

[Executes all 4 scripts]
```

## Learning Path

1. **Start with Tier 1** - Understand basic skill structure
2. **Move to Tier 2** - See how helper scripts work
3. **Advance to Tier 3** - See complete workflow with tools
4. **Ask questions** - Agent can explain any part in detail
5. **Customize** - Use as template for your own skills

## Why This Matters

This demo shows that:

- ✅ Skills are **modular** - Each is self-contained
- ✅ Skills are **reusable** - Can be used by any agent
- ✅ Skills are **portable** - Can be committed to git
- ✅ Skills are **verifiable** - Output proves execution
- ✅ Skills are **extensible** - Can add custom tools

## Next Steps

1. Ask the agent to run the full demo
2. Watch the output and explanations
3. Ask questions about specific tiers
4. Review the SKILL.md files for implementation details
5. Create your own skills based on this pattern

---

**Ready to see OpenCode Skills in action? Ask the agent to run the demo!** 🚀
