const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.json({ msg: "Hello World 2" });
});

app.listen(3000);
