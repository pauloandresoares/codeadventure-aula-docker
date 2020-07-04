FROM node:10
ARG NPM_ENV=production

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install && npm i sequelize-cli -g
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
