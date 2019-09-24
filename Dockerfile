FROM node:10.16.3-alpine

ADD . /app/image-uploading-front

WORKDIR /app/image-uploading-front

RUN npm install

EXPOSE 8000

CMD npm start
