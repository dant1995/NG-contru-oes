# ---- Builder stage ----
FROM node:20-alpine AS builder
WORKDIR /app

# Copia apenas os arquivos de definição de dependências
COPY package*.json ./
RUN npm ci --silent

# Copia o restante do código
COPY . .

# Executa o build da aplicação (Vite)
RUN npm run build

# ---- Runtime stage (Caddy) ----
FROM caddy:2-alpine AS runtime
# Copia os arquivos estáticos gerados pelo Vite para o diretório servido pelo Caddy
COPY --from=builder /app/dist /srv

# Exponha a porta padrão do Caddy (80)
EXPOSE 80

# Caddy já inicia automaticamente ao iniciar o container
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
