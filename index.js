const express = require("express");
const { PORT = 8080 } = process.env;
const app = express();

app.get("/", (req, res) => {
  res.send("HELLO THIS IS SAFIRA");
});

app.listen(PORT);
