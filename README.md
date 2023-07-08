# type-node-starter
Express Typescript boilerplate for starter development practices
- Datbase: SQLite
- ORM: Prisma
- TypeScript Execution: tsx
## Enviroment Requirement
* [volta](https://volta.sh/)

## Setup

### Config environment variable
Copy `.env.template` to `.env` and change the value for your environment setup
### Migrate DB
```sh
$ yarn prisma:migrate-dev
```

```sh
# Run at very first time when setup the project
$ yarn setup
```

## Start project
```sh
$ yarn dev
```

Check your development server at `http://localhost:5004/`
