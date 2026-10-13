
# WPMission MCP Server

Connect WPMission with AI assistants using the Model Context Protocol (MCP).

WPMission is a platform designed to help WordPress developers, freelancers, and agencies manage multiple WordPress websites from a single dashboard.

## Overview

The WPMission MCP Server provides an MCP-compatible interface for AI assistants.

**Current Version:** 0.1.0

**Status:** Published on the Official MCP Registry

## Current Features

- MCP protocol integration
- WPMission product information tool
- Docker container support
- Standard input/output (stdio) transport
- GitHub Actions automated testing
- Public container image on GHCR

### Available MCP Tool

`wpmission_info`

Returns information about WPMission and its WordPress website management platform.

**Note:** Live WordPress management operations are not yet connected.

## Installation

### Option 1: Docker

Docker must be installed on your computer.

```bash
docker run --rm -i ghcr.io/support-wpmission/wpmission-mcp-server:0.1.0
```

### Option 2: Run from Source

Clone the GitHub repository:

```bash
git clone https://github.com/support-wpmission/wpmission-mcp-server.git
cd wpmission-mcp-server
npm install
npm start
```

## MCP Client Configuration

For MCP clients supporting local stdio servers, use the following example configuration:

```json
{
  "mcpServers": {
    "wpmission": {
      "command": "docker",
      "args": [
        "run",
        "--rm",
        "-i",
        "ghcr.io/support-wpmission/wpmission-mcp-server:0.1.0"
      ]
    }
  }
}
```

Configuration locations vary between MCP clients.

## Development Roadmap

Planned improvements include:

- WPMission REST API integration
- WordPress website status monitoring
- Multi-site management tools
- Additional MCP actions and triggers

These features are not available in version 0.1.0.

## Project Links

- Website: https://wpmission.com
- GitHub: https://github.com/support-wpmission/wpmission-mcp-server
- MCP Registry: https://registry.modelcontextprotocol.io/

## Feedback and Support

For bug reports, feature requests, or technical questions, open an issue:

https://github.com/support-wpmission/wpmission-mcp-server/issues

## Maintainer

WPMission Team

https://wpmission.com

## Version

0.1.0 — Initial MCP Server release.

