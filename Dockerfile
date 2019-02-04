FROM cypress/browsers:chrome69
RUN node --version
RUN npm --version
WORKDIR /home/node/app
COPY cypress ./cypress
COPY package.json ./
COPY cypress.json ./

ENV CI=1

RUN npm install
RUN ls -all
RUN ls cypress
RUN $(npm bin)/cypress run
