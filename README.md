# API MICROSERVICE GATEWAY

This is an api gateway, unfortunately it is far from over, there are so many things that I wanted to add but time is up.

Api gateway is built with DDD architectures and clean software, in addition concepts and functionality are divided, in order to make it highly scalable.

The other projects are built using the DDD & Clean software architecture.

The following microservices are linked:

- Auth Microservice[Auth Microservice](https://github.com/devangelmotta/auth-microservice.git)
- Notes microservice[Notes microservice](https://github.com/devangelmotta/notes-microservice.git)

And finally the frontend:

- Notes frontend[Notes frontend](https://github.com/devangelmotta/notes-front.git)

## Requirements

- [Node v7.6+](https://nodejs.org/en/download/current/) or [Docker](https://www.docker.com/)
- [Yarn](https://yarnpkg.com/en/docs/install)

## Getting Started

#### Clone the repo and make it yours:

```bash
git clone --depth 1 https://github.com/devangelmotta/save-notes-microservice-example <ANY_FRIENDLIER_NAME>
cd <ANY_FRIENDLIER_NAME>
```

#### Install dependencies:

```bash
yarn
```

#### Set environment variables:

```bash
cp .env.example .env
```

## Running Locally

```bash
yarn dev
```

## Running in Production

```bash
yarn start
```

## Lint

```bash
# lint code with ESLint
yarn lint

# try to fix ESLint errors
yarn lint:fix

# lint and watch for changes
yarn lint:watch
```

## Test

```bash
# run all tests with Mocha
yarn test

# run unit tests
yarn test:unit

# run integration tests
yarn test:integration

# run all tests and watch for changes
yarn test:watch

# open nyc test coverage reports
yarn coverage
```

## Validate

```bash
# run lint and tests
yarn validate
```

## Logs

```bash
# show logs in production
pm2 logs
```

## Documentation

```bash
# generate and open api documentation
yarn docs
```

## Docker

```bash
# run container locally
yarn docker:dev

# run container in production
yarn docker:prod

# run tests
yarn docker:test
```

## Deploy

Set your server ip:

```bash
DEPLOY_SERVER=127.0.0.1
```

Replace my Docker username with yours:

```bash
nano deploy.sh
```

Run deploy script:

```bash
yarn deploy
```
