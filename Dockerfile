# Build
FROM node:24.6.0-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci -D
COPY . .
RUN npm run build

# Run
FROM node:24.6.0-alpine
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js
RUN npm ci

CMD ["npm", "start"]