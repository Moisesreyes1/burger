// Dependencies npm packages
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: true
}));
// Set handlebars
app.use(methodOverride("_method"))
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine', 'handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);
app.use("/create", routes);
app.use("/update", routes);
app.use("/id", routes);

// app listening
app.listen(PORT);

console.log("App listening on PORT: " + PORT);
console.log(module.exports)
