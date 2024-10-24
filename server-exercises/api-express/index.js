console.log("API Express exercise");

import express from "express";
import fs from "fs";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`<h1>Home</h1><a href="/user">Users data</a>`);
});

app.get("/user", (req, res) => userPage(res));

const userPage = (res) => {
  fs.readFile("server-exercises/api-express/users.txt", "utf8", (err, data) => {
    errorTest(err, "user", res);
    res.send(`<h2>The users data is:</h2><pre>${data}</pre>`);
  });
};

app.post("/user", (req, res) => receiveUsersData(req, res));

const receiveUsersData = (req, res) => {
  const users = {
    id: 4,
    user: "tomas",
    password: "1234",
  };
  const { id, user, password } = users;
  const newUser = `${id}|${user}|${password}`;

  fs.appendFile(
    "server-exercises/api-express/users.txt",
    `${newUser}\n`,
    (err) => {
      errorTest(err, "user", res);
      res.send("User added");
    }
  );
};

const errorTest = (err, page, res) => {
  if (err) {
    console.error(`There was an error in ${page} page: ${err}`);
    res.send(`<h2>Ooops... There was an error:</h2><h4>${err}</h4>`);
  }
};

app.listen(port, () => {
  console.log(`Backend running in http://localhost:${port}`);
});
