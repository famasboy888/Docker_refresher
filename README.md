 # Creating a docker file

 ```bash
FROM node:17-alpine                       <== Creating base image

WORKDIR /app                              <== Specifying working directory insided the container

COPY . .                                  <== First dot specifies the directory in local machine. Second dot is the directory inside the container relative to WORKDIR

RUN npm install                           <== RUN for downloading dependecies inside the application folder

EXPOSE 4000                               <== Exposing port of the container

CMD [ "node", "app.js" ]                   <== Used to execute start command. It is written as an array of strings
```

 ## Building the image

Tag is for `-t`.  The `dot(.)` is the path relative to the `Dockerfile`

 ```bash
docker build -t <image-name> .
```
 
