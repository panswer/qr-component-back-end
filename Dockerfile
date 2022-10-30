FROM node:18

WORKDIR /var/app

COPY ./packge*.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]