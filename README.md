# Node Todo App

Simple app to practice using Node, Postgres and Express to build a user authentication api using [this tutorial](https://www.youtube.com/watch?v=7UQBMb8ZpuE&t=609s) and [this tutorial](https://www.youtube.com/watch?v=cjqfF5hyZFg)

## Notes on process

This project was use to gain an understanding of React, Bootstrap, Node and Express. TDD hasn't been followed

## Run instructions
Fork, Clone, and cd into the repo
Install Node.js and npm

**Get the project's dependencies**
```npm install ```


**Setup the database**
Open psql
``` psql ```

Create database and connect

```
CREATE DATABASE auth_database;
```

Instal extensions

```
create extension if not exists "uuid-ossp"
```

Create table

```
CREATE TABLE users(
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL
);
```
**To run the server**
```
cd server
nodemon index
```
**To run the client**
```npm start```

## How the application works
[App](output.gif)