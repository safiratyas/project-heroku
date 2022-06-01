const express = require("express");
const { PORT = 8080 } = process.env;
const app = express();

app.get("/", (req, res) => {
  res.send("Check Project Heroku");
});

app.listen(PORT);
