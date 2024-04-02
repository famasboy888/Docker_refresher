FROM node:17-alpine

WORKDIR /app

COPY . .

EXPOSE 8080

CMD ["npx", "json-server", "--watch", "db.json", "--port", "8080"]