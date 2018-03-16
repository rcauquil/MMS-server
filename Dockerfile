FROM node:8.9-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN apk add --update --no-cache python build-base && \
    npm install && \
    apk del python build-base && \
    rm -rf /var/cache/apk/*

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000
CMD [ "npm", "start" ]
