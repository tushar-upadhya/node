const express = require("express");
const bodyParser = require("body-parser");

//  "type": "module",
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let n1 = Number(req.body.num1);
  let n2 = Number(req.body.num2);

  let result = n1 + n2;
  console.log("result:", result);
});

app.listen(port, () => {
  console.log("port:", port);
});

// api
