const express = require("express");
const app = express();

app.get("/teste2", (req, res) => {
  return res.json({ msg: "Hello World 2" });
});

app.listen(3000);
