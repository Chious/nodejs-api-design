## Prisma setup

1. Create DB at [Render](https://render.com)

2. Connect DB with prisma:

```shell
// initialize prisma
npx prisma init

// formatting doc
npx prisma format

// setup migration
npm i @prisma/client --save
npx prisma migrate dev --name init

// explore prisma ui
npx prisma studio
```

- `morgan`: for middleware
