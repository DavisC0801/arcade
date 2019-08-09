var express = require("express");
var router = express.Router();
var game = require('../../../models').Game;

router.post("/", function(req, res) {
  game.create({
    title: req.body.title,
    price: req.body.price,
    releaseYear: req.body.releaseYear,
    active: req.active
  })
  .then(game => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(game));
  })
  .catch(game => {
    res.setHeader("Content-Type", "application/json");
    res.status(500).send({error});
  })
})

router.get("/:id", function(req, res) {
  game.findByPk(req.params.id)
    .then(games => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(games));
    })
    .catch(error => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).send({error})
    });
});

router.get("/", function(req, res) {
  game.findAll()
    .then(games => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(games));
    })
    .catch(error => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).send({error})
    });
});

module.exports = router;
