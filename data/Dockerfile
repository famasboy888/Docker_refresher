FROM node:17-alpine

WORKDIR /app

COPY . .

EXPOSE 8080

RUN npx json-server --watch db.json --port 8080