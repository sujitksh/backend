FROM node:18-alpine
WORKDIR app
COPY . .
RUN npm install
RUN npm install nodemon
EXPOSE 8000
CMD ['npm','run','dev']