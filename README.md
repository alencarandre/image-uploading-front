# README

This software consume image uploading service (https://github.com/alencarandre/image-uploading-service)

## System dependencies

### For development

- node 10.16.3
- npm 6.9.0

### For production

- docker (recommended 19.03.1)
- docker-compose (recommended version 1.24.1)

## How to run this project

### Development

#### To prepare environment, follow the commands below

```bash
npm install
```

#### To run

```bash
npm start
```

Access the url `http://localhost:8000`

### Production

Production run under docker and is divided on 2 components: database (postgres) and application.

#### Enviroment variables

It need to setup some environment variables

`API_BASE_URL` ==> Define URL to access `image-uploading-services`

#### Build docker

```bash
docker-compose build
```

#### Run

```bash
docker-compose up -d
```

#### Stop

```bash
docker-compose stop
```
