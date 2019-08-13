var express = require("express");
var router = express.Router();
var store = require('../../../models').Store;

router.get('/:id', function(req, res){
  store.findByPk(req.params.id)
  .then(store => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(store));
  })
  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.status(500).send(JSON.stringify(store));
  });
});

router.get('/', function(req, res){
  store.findAll()
  .then(store => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(store));
  })
  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.status(500).send({error});
  });
});

module.exports = router;
