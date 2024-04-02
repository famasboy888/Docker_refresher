FROM node:20.12.0-alpine

WORKDIR /data-server

RUN npm install json-server

COPY . .

EXPOSE 8080

CMD npx json-server --watch db.json --port 8080