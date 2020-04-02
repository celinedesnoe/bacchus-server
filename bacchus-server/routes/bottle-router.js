const express = require("express");
const Bottle = require("../models/bottle-model.js");
const router = express.Router();

// ************************
//    CREATE NEW BOTTLE
// ************************

router.post("/process-create-bottle", (req, res, next) => {
  const {
    name,
    color,
    millesime,
    appellation,
    cépage,
    region,
    country,
    nb,
    price,
    userId
  } = req.body;

  Bottle.create({
    name,
    color,
    millesime,
    appellation,
    cépage,
    region,
    country,
    nb,
    price,
    userId
  })
    .then(bottleDoc => {
      res.json(bottleDoc);
    })
    .catch(err => next(err));
});

module.exports = router;
