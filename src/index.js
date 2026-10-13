#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/server";
import { serveStdio } from "@modelcontextprotocol/server/stdio";
import * as z from "zod/v4";

function createServer() {
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
            "WPMission helps manage multiple WordPress websites " +
            "from one dashboard. Website: https://wpmission.com. " +
            "Live WordPress management is not yet connected."
        }
      ]
    })
  );

  return server;
}

void serveStdio(createServer);
