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

const postUser = {
  id: 4,
  user: "tomas",
  password: "1234",
};

app.post("/user", (req, res) => receiveUsersData(res, postUser));

const receiveUsersData = (res, users) => {
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

const putUser = {
  id: 12,
  user: "tobias",
  password: "432423",
};

app.put("/user", (req, res) => uploadExistingUser(res, putUser));

const uploadExistingUser = (res, users) => {
  const { id, user, password } = users;

  fs.readFile("server-exercises/api-express/users.txt", "utf8", (err, data) => {
    errorTest(err, "user", res);

    const usersData = data.split("\n");
    const userIndex = usersData.findIndex((user) => user.includes(id));

    if (userIndex === -1) {
      res.send("User not found");
    } else {
      usersData[userIndex] = `${id}|${user}|${password}`;
      const updatedUsers = usersData.join("\n");

      fs.writeFile(
        "server-exercises/api-express/users.txt",
        updatedUsers,
        (err) => {
          errorTest(err, "user", res);
          res.send("User updated");
        }
      );
    }
  });
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
