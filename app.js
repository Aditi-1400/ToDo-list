const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();
var texts = [];
app.set("view engine", "ejs");
var workitems = [];
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", function(req, res) {

    var day = date();

    res.render("list", { title: day, Newlistitem: texts }); //key matches the one in list.ejs

});

app.post("/", function(req, res) {

    text = req.body.newItem; 
    if (req.body.list === "Work") {

        workitems.push(text);
        res.redirect("/work");
    } else {
        texts.push(text);
        res.redirect("/");

    }

});

app.get("/work", function(req, res) {

    workitems.push(req.body.newItem);
    res.render("list", { title: "Work", Newlistitem: workitems });

});

app.get("/about", function(req, res) {

    res.render("about");

});


app.listen(3000, function() {
    console.log("Server is up and running");
});