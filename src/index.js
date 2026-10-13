
import { McpServer } from "@modelcontextprotocol/server";
import { StdioServerTransport } from "@modelcontextprotocol/server/stdio";
import * as z from "zod/v4";

const server = new McpServer({
  name: "wpmission-mcp-server",
  version: "0.1.0"
});

server.registerTool(
  "wpmission_info",
  {
    description: "Get information about WPMission",
    inputSchema: z.object({})
  },
  async () => ({
    content: [
      {
        type: "text",
        text:
          "WPMission is a platform for managing " +
          "multiple WordPress websites from one dashboard. " +
          "Website: https://wpmission.com. " +
          "Live WordPress management is not yet connected."
      }
    ]
  })
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("MCP server error:", error);
  process.exit(1);
});
