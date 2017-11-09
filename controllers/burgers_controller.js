var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers/create", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    // Send back the ID of the new quote
    console.log(result);
    res.redirect("/");
  });
});

router.put("/api/burgers/update", function(req, res) {
	burger.update(req.body.burger_id, function(result) {
		console.log(result);
		res.redirect("/");
	});
});

router.delete("/api/burgers/:id", function(req, res) {
	burger.delete(req.body.burger_id, function(result) {
		console.log(result);
		res.redirect("/");
	});
});

// Export routes for server.js to use.
module.exports = router;