const express = require("express");
const app = express();
const cors = require("cors")
const bodyParser = require("body-parser")
const port = 3000;

app.use(cors())
app.use(bodyParser.urlencoded({extends: true}))
app.use(bodyParser.json())
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.post("/form", (req, res) => {
  console.log(req.body);
});
