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
    userId,
    pictures,
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
    userId,
    pictures,
  })
    .then((bottleDoc) => {
      res.json(bottleDoc);
    })
    .catch((err) => next(err));
});

// ************************
//    GET BOTTLES OF A USER
// ************************

router.post("/process-all-bottles/:_id", (req, res, next) => {
  const { _id } = req.params;
  Bottle.find({
    userId: { $eq: _id },
  })
    .then((bottlesDoc) => {
      res.json(bottlesDoc);
    })
    .catch((err) => {
      next(err);
    });
});

// ************************
//    GET DETAILS OF A BOTTLE
// ************************

router.post("/process-bottle-details/:id", (req, res, next) => {
  // const { id } = req.params;
  const id = "5f29642fc8ba611465942794";
  Bottle.findById(id)
    .then((bottleDoc) => {
      res.json(bottleDoc);
    })
    .catch((err) => {
      next(err);
    });
});

// *****************************
//    CHANGE NUMBER OF A BOTTLE
// *****************************

router.put("/process-update-bottle-number/:_id", (req, res, next) => {
  const { _id } = req.params;
  const { bottle } = req.body;
  Bottle.findByIdAndUpdate(
    _id,
    {
      nb: bottle.nb,
      name: bottle.name,
      color: bottle.color,
      vintage: bottle.vintage,
      appellation: bottle.appellation,
      cepage: bottle.cepage,
      region: bottle.region,
      country: bottle.country,
      price: bottle.price,
      isFav: bottle.isFav,
      comments: bottle.comments,
      pictures: bottle.pictures,
    },
    { new: true, runValidors: true }
  )
    .then((bottlesDoc) => {
      console.log("bottlesDoc", bottlesDoc);

      res.json(bottlesDoc);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
