const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bottleSchema = new Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: { type: String, required: true },
    color: { type: String, required: true },
    millesime: { type: String, required: true },
    appellation: { type: String },
    cépage: { type: String },
    region: { type: String },
    country: { type: String },
    nb: { type: Number, required: true },
    price: { type: Number, required: true }
  },
  {
    timestamps: true
  }
);

const Bottle = mongoose.model("Bottle", bottleSchema);
module.exports = Bottle;
