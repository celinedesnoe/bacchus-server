const express = require("express");
const User = require("../models/user-model.js");
const Cellar = require("../models/cellar-model.js");

const router = express.Router();

// ************************
//          CREATE CELLAR
// ************************

router.post("/process-create-cellar", (req, res, next) => {
  console.log(req.body);
  const { name, capacity } = req.body;
  Cellar.create({
    name,
    capacity
  })
    .then(cellarDoc => {
      res.json(cellarDoc);

      // +UPDATE USER BY ADDING CELLAR ID
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
