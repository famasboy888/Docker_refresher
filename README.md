# Docker Compose

Docker compose naming is `docker-compose.yaml`.

```bash
version: '3.8'                     
services:
  data-server:                     <== any name you like
    build: ./data                  <== where is Dockerfile located
    container_name: data_c1        <== define container name when running
    ports:                          <== same ports you defined in docker file
      - '8080:8080'
    volumes:
      - ./data:/data-server         <== allows modification within the local file and not the container
```

It should be stored at the very root directory of all the projects

```bash
├── api                            <== this is app 2
│   ├── app.js
│   ├── Dockerfile                  <== App 2 has its own Docker file
│   ├── package.json
│   └── package-lock.json
├── data                           <== this is app 1
│   ├── db.json
│   └── Dockerfile                  <== App 1 has its own Docker file
├── docker-compose.yaml            <== docker compose is stored outsidde
```



