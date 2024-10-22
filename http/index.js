import http from "http";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  const response = {
    message: "Hello World!",
  };

  res.end(JSON.stringify(response));
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
