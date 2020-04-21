const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bottleSchema = new Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: { type: String, required: true },
    color: { type: String },
    vintage: { type: String },
    appellation: { type: String },
    cepage: { type: String },
    region: { type: String },
    country: { type: String },
    nb: { type: Number },
    price: { type: Number },
    isFav: { type: Boolean },
    comments: { type: Array },
    pictures: { type: Array },
  },
  {
    timestamps: true,
  }
);

const Bottle = mongoose.model("Bottle", bottleSchema);
module.exports = Bottle;
