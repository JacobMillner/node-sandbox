FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# rather than copying the entire working directory,
# we are only copying the package.json file.
# This allows us to take advantage of cached Docker layers
# https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable

RUN npm install -g yarn
RUN yarn

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "yarn start:dev" ]
