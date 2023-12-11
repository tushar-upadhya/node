const express = require("express");
const bodyParser = require("body-parser");

let app = express();
let PORT = 3000;

// app.get("/", function (req, res) {
//   let date = new Date();
//   let day = date.getDate();

//   if (day === 0) res.send("Date is sunday");
//   else if (day === 1) res.send("Date is monday");
//   else if (day === 2) res.send("Date is tuesday");
//   else if (day === 3) res.send("Date is wednesday");
//   else if (day === 4) res.send("Date is thursday");
//   else if (day === 5) res.send("Date is friday");
//   else if (day === 6) res.send("Date is saturday");
//   console.log(res);
// });

app.listen(PORT, () => {
  console.log("PORT:", PORT);
});
