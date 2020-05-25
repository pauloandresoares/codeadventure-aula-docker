FROM node:10 as builder
ARG NPM_ENV=prod

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g @angular/cli && npm install
COPY . .

RUN ng build --${NPM_ENV}

FROM nginx:1.15.5
COPY --from=builder /usr/src/app/dist/games-app/ /usr/share/nginx/html
EXPOSE 80