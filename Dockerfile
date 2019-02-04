FROM cypress/browser:chrome69
RUN node --version
RUN npm --version
WORKDIR /home/node/app
COPY cypress ./
COPY package.json ./
COPY cypress.json ./

ENV CI=1

RUN npm install
RUN npm ci
RUN $(npm bin)/cypress run
