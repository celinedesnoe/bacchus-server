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

// ###################################################
// EXAMPLE
// ###################################################

// {
//   _id: "5fgw402834yhwegr3"
//   username: "frietpoune",
//   firstName: "Céline",
//   lastName: "Desnoë",
//   email: "frietpoune92@hotmail.fr",
//   encryptedPassword: "2342euwhn23jk4h2ej234",
//   bio: "Coding Hard",
//   website: "https://www.frietpoune.fr",
//   profilePic: "http://ermbkjhtnaeklrjthe.fr",
//   phoneNumber: 0698632152,
//   sex: female,
//   facebookAccount: "frietpoune92@hotmail.fr",
//   following: ["laurastromboni", "brwncluse", ... ],
//   followers: ["laurastromboni", "brwncluse", ... ],
//   // likedPosts: { type: Array },
//   taggedPics: ["post_.id 1", ...]
// }
