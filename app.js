const express = require("express");
const app = express();
const session = require("express-session");
const bcrypt = require("bcrypt");
const mysql = require("mysql");

app.set("view engine", "ejs");

app.use(session({
  secret: "bottom secret!",
  resave: true,
  saveUninitialized: true
}));

app.use(express.urlencoded({extended: true}));

// Routes
app.get("/", function(req, res) {
  res.render("index");
});

app.post("/", function(req, res) {
  let username = req.body.username;
  let password = req.body.password;
  console.log("Username: " + username);
  console.log("Password: " + password);
  res.send("This is the root route using POST!");
});

app.listen(8080, function() {
  console.log("Running express server...");
});