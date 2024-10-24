console.log("Server HTTP exercise");

import express from "express";

const app = express();
const port = 3000

app.get("/", (req, res) => {
  res.send("Hello world!!!");
});

const myDescription =
  "I am Tomas Korzusehec, and develop websites with react, vanilla, socket, express and more programming languages";

app.get("/about", (req, res) => {
  res.send(myDescription);
});

app.get("/error", (req, res) => {
  res.send(
    `<h2>Ops, looks like you are not in an existing page!!!, get back to home</h2><br><a href="/">Home</a>`
  );
});

app.listen(port, (req, res) => {
    console.log(`Backend running on http//localhost:${port}`)
})
