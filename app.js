//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");


const app = express();
let items = ["Buy Food", "Cook Food", "Eat Food"];
let workitems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {

    // let day = date.getDay();
    let day = date.getDate();

  res.render("list", { listTitle: day, newlistitem: items });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;

  if (req.body.list == "work") {
    workitems.push(item);
    res.redirect("/work");
  }
  else {
    items.push(item);
    res.redirect("/");
  }


})

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "work List", newlistitem: workitems });
})

app.post("/work", function (req, res) {
  let item = req.body.newItem;
  workitems.push(item);
  res.redirect("/work");

})

app.get("/about", function (req, res) {
  res.render("about");
})

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});