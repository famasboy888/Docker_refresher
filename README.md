 # Optimizing build using layer cache techniques

 ```bash
 FROM node:17-alpine                  <== This is cached

WORKDIR /app                          <== This is cached

COPY package.json .                   <== copy this so we can run npm install right away

RUN npm install                       <== This is cached next time it will be ran

COPY . .

EXPOSE 4000

CMD [ "node", "app.js" ]
 ```