
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev --no-audit --no-fund

COPY src ./src

ENV NODE_ENV=production

LABEL io.modelcontextprotocol.server.name="io.github.support-wpmission/wpmission-mcp-server"

CMD ["node", "src/index.js"]
