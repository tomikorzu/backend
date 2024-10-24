console.log("Server HTTP exercise");

import http from "http";
const port = 3000;

const server = http.createServer((req, res) => setServerPages(req, res));

const setServerPages = (req, res) => {
  res.setHeader("Content-type", "text/html");

  if (req.method === "GET" && req.url === "/") {
    homePage(res);
  } else if (req.method === "GET" && req.url === "/about") {
    aboutPage(res);
  } else {
    errorPage(res);
  }
};

const homePage = (res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "text/html");
  res.end(`<h1>Hello World!!!</h1><a href="/about">About Me</a>`);
};

const myDescription =
  "I am Tomas Korzusehec, and develop websites with react, vanilla, socket, express and more programming languages";

const aboutPage = (res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "text/html");
  res.end(`<h1>About Me</h1><h3>${myDescription}</h3>`);
};

const errorPage = (res) => {
  res.statusCode = 404;
  res.setHeader("Content-type", "text/html");
  res.end(
    `<h1>Ooops... Looks like you couldnt find the page that you were looking for.</h1><a href="/">Home</a>`
  );
};

server.listen(port, () => {
  console.log(`Backend running in http://localhost://${port}`);
});
