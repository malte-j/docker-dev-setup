FROM node:12-stretch-slim

WORKDIR /usr/src/app

RUN npm install -g nodemon

COPY app/package*.json ./
RUN npm install

COPY . .

CMD [ "npm", "start" ]