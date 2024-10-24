console.log("API Express exercise");

import express from "express";
import fs from "fs";

const app = express();
const port = 3000;

app.use(express.json());

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
  const { id, user, password } = req.body;
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

app.put("/user", (req, res) => uploadExistingUser(req, res));

const uploadExistingUser = (req, res) => {
  const { id, user, password } = req.body;

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

app.delete("/user", (req, res) => deleteUserById(req, res));

const deleteUserById = (req, res) => {
  const { id } = req.body;

  fs.readFile("server-exercises/api-express/users.txt", "utf8", (err, data) => {
    errorTest(err, "user", res);

    const users = data.split("\n");
    const filteredUsers = users.filter((user) => !user.startsWith(id + "|"));

    if (filteredUsers.length === users.length) {
      return res.send("User not found");
    }

    const result = filteredUsers.join("\n");

    fs.writeFile("server-exercises/api-express/users.txt", result, (err) => {
      errorTest(err, "user", res);
      res.send("User deleted");
    });
  });
};

const errorTest = (err, page, res) => {
  if (err) {
    console.error(`There was an error in ${page} page: ${err}`);
    res.send(`<h2>Ooops... There was an error:</h2><h4>${err}</h4>`);
  }
};

app.get("*", (req, res) => {
  res.send(
    `<h1>Ooops... Looks like you couldnt find the page that you were looking for.</h1><a href="/">Home</a>`
  );
});

app.listen(port, () => {
  console.log(`Backend running in http://localhost:${port}`);
});
