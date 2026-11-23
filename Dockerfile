# Vite 8 exige Node 20.19+ ou 22.12+: fixamos o Node 22 para o build não depender do padrão do Railway.
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=build /app/dist ./dist
COPY scripts ./scripts
CMD ["node", "scripts/start.mjs"]
