# Getting started

## Environment

You will need nodejs for this project. Recommended version 18+

## Tech stack

- We are using `yarn`. Please do not run `npm` and do not add `package-lock.json` to the git.
- Nextjs
- @tanstack/react-query(client components REST api requests)
- mui(UI components)
- react-hook-form(form control)
- yarn
- typescript

## Obtain a working `.env`

Because our `.env` contains a real keys to services, we don't add it to the `git`. Ask any developer to obtain an actual `.env`. An example of the configuration can be found in `.env.example`.

> Only MANDATORY environment variables are included in the configuration example `.env.example`.

## How to start

- Fill in the environment variables
- yarn
- yarn dev

# Development

## Project structure

- `/src/app/api` - server side api endpoint
- `/src/app/`  - application routes
- `/src/app/components` - separated ui components
- `/src/app/consts` - constants, enums
- `/src/app/hocs` - high order components
- `/src/app/lib` - api libs, services(cookies, search params), some helper functions
- `/src/app/providers` - react data providers

