var express = require("express");
const ejs = require("ejs");

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set("view engine", "ejs");

var users = require("./routes/userRoutes.js");
app.use(users);

app.listen(8080, () => {
  console.log("App Is Listen Successfully!!!!");
});