var express = require("express");
var router = express.Router();
var game = require('../../../models').Game;

router.delete("/:id", function(req, res){
  let toDestroy = game.findByPk(req.params.id);
  toDestroy.destroy()
  .then(toDestroy => {
    res.setHeader("Content-Type", "application/json");
    res.status(204);
  })
  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.status(500).send({error});
  })
})

router.patch("/:id", function(req, res){
  game.update({
    title: req.body.title,
    price: req.body.price,
    releaseYear: req.body.releaseYear,
    active: req.body.active
  },{
    returning: true,
    where: {
      id: parseInt(req.params.id)
    }
  })
  .then(([rowsUpdate, [updatedGame]]) => {
    res.setHeader("Content-Type", "application/json");
    res.status(202).send(JSON.stringify(updatedGame));
  })
  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.status(500).send({error});
  })
})

router.post("/", function(req, res) {
  game.create({
    title: req.body.title,
    price: req.body.price,
    releaseYear: req.body.releaseYear,
    active: req.body.active
  })
  .then(game => {
    res.setHeader("Content-Type", "application/json");
    res.status(201).send(JSON.stringify(game));
  })
  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.status(500).send({error})
  });
})

router.get("/:id", function(req, res) {
  game.findByPk(req.params.id)
  .then(game => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(game));
  })
  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.status(500).send({error})
  });
});

router.get("/", function(req, res) {
  game.findAll()
  .then(game => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(game));
  })
  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.status(500).send({error})
  });
});

module.exports = router;
