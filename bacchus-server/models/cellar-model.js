const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cellarSchema = new Schema(
  {
    name: { type: String, required: true },
    owners: [{ type: Schema.Types.ObjectId, ref: "User" }],
    capacity: { type: Number, required: true }
  },
  {
    timestamps: true
  }
);

const Cellar = mongoose.model("Cellar", cellarSchema);
module.exports = Cellar;
