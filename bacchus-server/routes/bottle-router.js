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
    vintage,
    appellation,
    cepage,
    region,
    country,
    nb,
    price,
    userId
  } = req.body;

  Bottle.create({
    name,
    color,
    vintage,
    appellation,
    cepage,
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

// ************************
//    GET BOTTLES OF A USER
// ************************

router.post("/process-all-bottles/:_id", (req, res, next) => {
  const { _id } = req.params;
  Bottle.find({
    userId: { $eq: _id }
  })
    .then(bottlesDoc => {
      res.json(bottlesDoc);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
