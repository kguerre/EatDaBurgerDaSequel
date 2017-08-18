var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  db.Burger.findAll({}).then(function(data) {
    var burgObject = { burgers: data };
    console.log(burgObject);
    res.render("index", burgObject);
  });
});

router.post("/", function(req, res) {
  db.Burger
    .create(
      { burger_name: req.body.burger_name, 
        devoured: req.body.devoured})
    .then(function() {
      res.redirect("/burgers");
    });
});

router.put("/:id", function(req, res) {
  db.Burger
    .update(
      {devoured: req.body.devoured},
      {where: {
          id: req.params.id
        }
      })
    .then(function() {
      res.redirect("/");
    });
});



module.exports = router;
