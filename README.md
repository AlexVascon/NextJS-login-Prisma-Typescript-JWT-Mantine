Buit with NextJS, Typescript, Prisma, Postgres, JWT, Mantine

This is a simple login application for learning NextJS to put on CV.

For this application to work you will need Postgres installed and edit the env values in this project to connect to the database. For some reason because it's NestJS you need to make sure the values match in both the .env and the .env.local files

After that it's as simple as npm run dev

the /profile route is protected. You only gain access if you are logged in

You can login or register. I liked the Mantine components library so I used that for the GUI.
