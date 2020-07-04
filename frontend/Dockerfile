FROM node:10 as builder
ARG NPM_ENV=prod

WORKDIR /usr/src/app
COPY . .
RUN npm install -g @angular/cli && npm install
RUN ng build --${NPM_ENV}

FROM nginx:1.15.5
COPY --from=builder /usr/src/app/dist/frontend/ /usr/share/nginx/html
EXPOSE 80