FROM node:latest

RUN npm install -g npm@8.15.0
WORKDIR /app
COPY . .

RUN npm ci

VOLUME /app
ENV PORT 8080
EXPOSE ${PORT}

CMD [ "npm", "start" ]