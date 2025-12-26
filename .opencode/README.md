# OpenCode Skills Showcase

This directory contains a **3-tier demonstration** of OpenCode Skills, showing how they work with increasing complexity.

## 📚 What Are OpenCode Skills?

OpenCode Skills are modular, file-based systems that give AI agents reusable capabilities. They consist of:

1. **SKILL.md** - Instructions that tell the agent what the skill does and how to use it
2. **Helper Scripts** - Executable files (bash, python, etc.) that do the actual work
3. **Custom Tools** - TypeScript tools that extend functionality

The agent loads skills on-demand, keeping context lightweight and focused.

---

## 🎯 The Three Tiers

### **Tier 1: Simple (POC)**
**Location**: `./skill/hello-skill/`

**What it shows:**
- ✅ Minimal skill structure (just SKILL.md)
- ✅ Using built-in `bash` tool
- ✅ One-liner execution

**Files:**
```
hello-skill/
└── SKILL.md
```

**How it works:**
The agent loads the skill and executes a simple bash echo command. This demonstrates the absolute basics of how skills work.

---

### **Tier 2: Intermediate**
**Location**: `./skill/steps-skill/`

**What it shows:**
- ✅ Skills with helper scripts
- ✅ Ordered execution with console output
- ✅ Random words proving actual execution
- ✅ Multi-step workflows

**Files:**
```
steps-skill/
├── SKILL.md
└── steps.sh
```

**How it works:**
1. Agent loads the skill
2. Agent reads SKILL.md instructions
3. Agent uses `bash` tool to execute `steps.sh`
4. Script prints 4 ordered steps with random words
5. Output shows execution flow and control

**Run it:**
```bash
bash .opencode/skill/steps-skill/steps.sh
```

---

### **Tier 3: Advanced**
**Location**: `./skill/workflow-skill/`

**What it shows:**
- ✅ Multiple helper scripts working together
- ✅ Sequential execution with full visibility
- ✅ Integration with custom tools
- ✅ Complete workflow orchestration

**Files:**
```
workflow-skill/
├── SKILL.md
├── script1.sh    (Initialization Phase)
├── script2.sh    (Validation Phase)
├── script3.sh    (Execution Phase)
└── script4.sh    (Finalization Phase)

tool/
└── print-tool.ts (Custom tool for summary)
```

**How it works:**
1. Agent loads the skill
2. Agent reads SKILL.md instructions
3. Agent executes script1.sh → script2.sh → script3.sh → script4.sh in sequence
4. Each script prints its phase with random words and status
5. Agent calls custom `print-tool` to generate final summary
6. Output shows complete workflow with full control and visibility

**Run it:**
```bash
bash .opencode/skill/workflow-skill/script1.sh
bash .opencode/skill/workflow-skill/script2.sh
bash .opencode/skill/workflow-skill/script3.sh
bash .opencode/skill/workflow-skill/script4.sh
```

---

## 🔑 Key Concepts Demonstrated

### **1. Skills Are Instructions, Not Code**
- SKILL.md files contain instructions for the agent
- They tell the agent *what* to do and *how* to do it
- The agent decides which tools to use

### **2. Scripts Are Portable**
- Helper scripts can be bash, python, or any language
- They live alongside the skill definition
- The agent executes them using the `bash` tool

### **3. Custom Tools Extend Functionality**
- TypeScript tools in `.opencode/tool/` are available to all skills
- They provide specialized functionality
- The agent calls them directly

### **4. Full Visibility and Control**
- Console output shows exactly what's happening
- Random words prove actual execution (not hallucination)
- Agent can see results and make decisions

---

## 📊 Comparison Table

| Feature | Tier 1 | Tier 2 | Tier 3 |
|---------|--------|--------|--------|
| **Complexity** | Minimal | Medium | Advanced |
| **Files** | 1 | 2 | 5 + custom tool |
| **Scripts** | 0 | 1 | 4 |
| **Custom Tools** | No | No | Yes |
| **Use Case** | POC | Workflows | Complex Systems |
| **Learning Curve** | Instant | Easy | Moderate |

---

## 🚀 How to Use This Showcase

### **For Learning:**
1. Start with Tier 1 - understand basic structure
2. Move to Tier 2 - see how scripts work
3. Advance to Tier 3 - see full orchestration

### **For Demonstration:**
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

---

## 💡 Key Takeaways

✅ **Skills are modular** - Each skill is self-contained and reusable
✅ **Scripts are powerful** - Simple bash/python scripts can do complex work
✅ **Tools extend capabilities** - Custom TypeScript tools add specialized functionality
✅ **Full visibility** - Console output shows exactly what's happening
✅ **No hallucination** - Random output proves actual execution, not AI guessing

---

## 📖 Further Reading

- [OpenCode Skills Documentation](https://opencode.ai/docs/skills/)
- [OpenCode GitHub](https://github.com/sst/opencode)
- [Model Context Protocol (MCP)](https://modelcontextprotocol.io/)

---

**Created to showcase OpenCode Skills architecture and capabilities** 🎯
