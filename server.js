// server.js

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.render("home.ejs", {
    msg: "Welcome to the Homepage!",
    user: {
      name: "user1",
      id: 123456,
      status: "vistor",
    },
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
