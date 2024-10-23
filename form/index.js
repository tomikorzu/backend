import http from "http";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET" && req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hola esto es un GET");
  } else if (req.method === "POST" && req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    let response = {
      mensaje: "Datos recibidos",
      data: {
        usuario: "admin",
        role: "admin",
      },
    };

    res.end(JSON.stringify(response));
  } else if (req.method === "PATCH" && req.url === "/data") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    let response = {
      mensaje: "Datos actualizados",
      data: {
        usuario: "admin",
        role: "root",
      },
    };

    res.end(JSON.stringify(response));
  } else if (req.method === "DELETE") {
    res.statusCode = 200;

    res.setHeader("Content-Type", "text/plain");
    res.end("Hola esto es un DELETE");
  } else {
    res.statusCode = 404;

    res.setHeader("Content-Type", "text/plain");
    res.end("Ruta no encontrada");
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
