FROM node:current-alpine

RUN apk update && apk add nginx

COPY . /var/www/rustyabbott.com

WORKDIR /var/www/rustyabbott.com