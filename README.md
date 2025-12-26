# 🎯 OpenCode Skills Showcase

A complete demonstration of **OpenCode Skills** with three progressive tiers, comprehensive documentation, and a demo agent.

## 📚 What's Included

### 1. Three Demonstration Skills

**Tier 1: Simple (POC)**
- Location: `.opencode/skill/hello-skill/`
- Files: `SKILL.md`
- Demonstrates: Basic skill structure
- Concept: Skills are instructions, not code

**Tier 2: Intermediate**
- Location: `.opencode/skill/steps-skill/`
- Files: `SKILL.md`, `steps.sh`
- Demonstrates: Helper scripts with ordered execution
- Concept: Helper scripts are portable

**Tier 3: Advanced**
- Location: `.opencode/skill/workflow-skill/`
- Files: `SKILL.md`, `script1.sh`, `script2.sh`, `script3.sh`, `script4.sh`
- Custom Tool: `.opencode/tool/print-tool.ts`
- Demonstrates: Complete workflow orchestration
- Concept: Custom tools extend functionality

### 2. Demo Agent

**Location**: `.opencode/agent/skills-demo-agent.md`

A simple agent that:
- Loads and executes each skill
- Shows output and explanations
- Demonstrates the progression from simple to complex
- Answers questions about skills

### 3. Documentation

- **SHOWCASE_SUMMARY.txt** - Quick reference guide
- **SKILLS_SHOWCASE.md** - Comprehensive detailed guide
- **DEMO_AGENT.md** - How to use the demo agent
- **.opencode/README.md** - Skills structure overview
- **README.md** - This file

## 🚀 Quick Start

### Run the Full Demo

Ask the demo agent to run the full demonstration:

```
"Run the full skills demo"
```

The agent will:
1. Execute Tier 1 (hello-skill)
2. Execute Tier 2 (steps-skill)
3. Execute Tier 3 (workflow-skill)
4. Explain what you learned

### Run Individual Tiers

```
"Run Tier 1"
"Run Tier 2"
"Run Tier 3"
```

### Ask Questions

```
"Explain the hello-skill"
"How does the workflow-skill work?"
"What's the difference between the tiers?"
```

## 📖 Documentation Guide

### For Quick Overview
Start with **SHOWCASE_SUMMARY.txt** - 5 minute read

### For Detailed Understanding
Read **SKILLS_SHOWCASE.md** - 15 minute read with examples

### For Using the Demo Agent
Read **DEMO_AGENT.md** - Learn how to interact with the agent

### For Implementation Details
Check individual **SKILL.md** files in each skill directory

## 🔑 Key Concepts

### 1. Skills Are Instructions
```
SKILL.md contains instructions for the agent
↓
Agent reads the instructions
↓
Agent decides which tools to use
↓
Agent executes the commands
```

### 2. Scripts Are Portable
```
Helper scripts can be:
- Bash (.sh)
- Python (.py)
- Any language

They live alongside SKILL.md
Agent executes them via bash tool
```

### 3. Custom Tools Extend Functionality
```
TypeScript tools in .opencode/tool/
↓
Available to all skills
↓
Provide specialized functionality
↓
Agent calls them directly
```

### 4. Full Visibility
```
Console output shows exactly what's happening
Random words prove actual execution
Not hallucination or guessing
Agent can see results and make decisions
```

### 5. Just-in-Time Loading
```
Agent doesn't load all skills at once
Skills load on-demand when needed
Keeps context lightweight and focused
Reduces hallucination and confusion
```

## 📊 Tier Comparison

| Feature | Tier 1 | Tier 2 | Tier 3 |
|---------|--------|--------|--------|
| **Complexity** | Minimal | Medium | Advanced |
| **Files** | 1 | 2 | 5 + tool |
| **Helper Scripts** | 0 | 1 | 4 |
| **Custom Tools** | No | No | Yes |
| **Use Case** | POC | Workflows | Complex Systems |
| **Learning Curve** | Instant | Easy | Moderate |

## 📁 Directory Structure

```
.
├── .opencode/
│   ├── agent/
│   │   ├── codebase-agent.md          # Development agent
│   │   └── skills-demo-agent.md       # Demo agent
│   ├── skill/
│   │   ├── hello-skill/
│   │   │   └── SKILL.md
│   │   ├── steps-skill/
│   │   │   ├── SKILL.md
│   │   │   └── steps.sh
│   │   └── workflow-skill/
│   │       ├── SKILL.md
│   │       ├── script1.sh
│   │       ├── script2.sh
│   │       ├── script3.sh
│   │       └── script4.sh
│   ├── tool/
│   │   └── print-tool.ts
│   └── README.md
├── SHOWCASE_SUMMARY.txt               # Quick reference
├── SKILLS_SHOWCASE.md                 # Detailed guide
├── DEMO_AGENT.md                      # Agent usage guide
└── README.md                          # This file
```

## 💡 Learning Path

### Step 1: Understand the Concept
Read **SHOWCASE_SUMMARY.txt** to understand what skills are

### Step 2: See It In Action
Ask the demo agent to run the full demo

### Step 3: Learn the Details
Read **SKILLS_SHOWCASE.md** for comprehensive explanations

### Step 4: Explore the Code
Look at individual SKILL.md files and helper scripts

### Step 5: Customize
Use this as a template for your own skills

## 🎯 What You'll Learn

After exploring this showcase, you'll understand:

✅ How OpenCode Skills are structured
✅ How agents load and execute skills
✅ How helper scripts work with agents
✅ How custom tools extend functionality
✅ The progression from simple to complex
✅ Why skills are better than hallucination
✅ How to create your own skills

## 🔗 Related Resources

- [OpenCode Skills Documentation](https://opencode.ai/docs/skills/)
- [OpenCode GitHub](https://github.com/sst/opencode)
- [Model Context Protocol (MCP)](https://modelcontextprotocol.io/)

## 🚀 Next Steps

1. **Run the demo** - Ask the agent to run the full skills demo
2. **Read the docs** - Start with SHOWCASE_SUMMARY.txt
3. **Explore the code** - Look at the SKILL.md files
4. **Ask questions** - The demo agent can explain anything
5. **Create your own** - Use this as a template

## ✨ Key Takeaways

- **Skills are modular** - Each skill is self-contained and reusable
- **Scripts are powerful** - Simple bash/python scripts can do complex work
- **Tools extend capabilities** - Custom TypeScript tools add specialized functionality
- **Full visibility** - Console output shows exactly what's happening
- **No hallucination** - Random output proves actual execution
- **Just-in-time loading** - Agent stays focused with on-demand skill loading

---

**Ready to see OpenCode Skills in action?**

Ask the demo agent: `"Run the full skills demo"`

🎉
