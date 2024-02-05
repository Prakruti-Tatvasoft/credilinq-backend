# Credilinq SME Health Platform

## Dependencies

- Nest.js with GraphQL
- Database: Postgresql
- ORM: Prisma

## Installation

```bash
$ npm install
```

## Running the Application

    1. Create env file and add database connection url [variable: DATABASE_URL]
    2. Create database in Postgres `credilinq`
    3. Run migration
        $ npm run db:migrate:dev
    4. Start server on watch mode
        $ npm run start:dev
        Server is running on http://localhost:4000

##### You can access the GraphQL Playground to interact with the schema on **/graphql**

## Additional Commands

```bash

# reset migration
$ npm run db:migrate:reset

# Start server on development
$ npm run start:dev

# Start server on production
$ npm run start:prod

# Create build
$ npm run build

```

### File System Storage

- I have used local storage for storing attachments of health form, it will be stored inside **/uploads** directory.
