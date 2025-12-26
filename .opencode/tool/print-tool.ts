import { tool } from "@opencode-ai/plugin"

const randomWords = [
  "magnificent",
  "brilliant",
  "outstanding",
  "exceptional",
  "remarkable",
  "spectacular",
  "phenomenal",
  "incredible",
  "amazing",
  "wonderful",
]

function getRandomWord(): string {
  return randomWords[Math.floor(Math.random() * randomWords.length)]
}

export default tool({
  description: "Print a summary message with random words",
  args: {
    title: tool.schema
      .string()
      .describe("Title for the summary")
      .optional(),
  },
  async execute(args) {
    const title = args.title || "Workflow Summary"
    const word1 = getRandomWord()
    const word2 = getRandomWord()
    const word3 = getRandomWord()

    const output = `
╔════════════════════════════════════════════════════════════════╗
║                    ${title.padEnd(56)}║
╚════════════════════════════════════════════════════════════════╝

🎯 Custom Tool Output:
   This is a ${word1} demonstration of how custom tools work!
   The workflow was ${word2} and the results are ${word3}.
   
📊 Summary:
   • All scripts executed successfully
   • Custom tool integrated seamlessly
   • Workflow completed with full visibility
   
✨ This shows how OpenCode Skills combine:
   ✓ Helper scripts (bash, python, etc.)
   ✓ Custom tools (TypeScript)
   ✓ Built-in tools (bash, read, write)
   ✓ Complete orchestration and control

🎉 Tier 3 Workflow Complete!
`

    return output
  },
})
