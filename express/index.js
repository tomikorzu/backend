import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    message: "This is get method!",
  });
});

app.post("/", (req, res) => {
  res.json(req.body);
});

app.patch("/data", (req, res) => {
  let response = {
    message: "Data updated",
    data: {
      usuario: "admin",
      role: "root",
    },
  };
  res.json(response);
});

app.delete("/", (req, res) => {
  res.send({
    message: "This is delete method!",
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
