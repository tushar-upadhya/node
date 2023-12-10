const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/about", (req, res) => {
  res.send("hi my is tushar ");
});

app.get("/server", (req, res) => {
  res.send("sass products , frontend , backend development ");
});

app.listen(port, () => {
  console.log("port:", port);
});
