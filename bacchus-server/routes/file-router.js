const express = require("express");

const fileUploader = require("../config/file-uploader.js");

const router = express.Router();

var cloudinary = require("cloudinary");

// in single() what the front end send
router.post(
  "/single-upload",
  fileUploader.single("userFile"),
  (req, res, next) => {
    // multer puts all the information about the uploaded in req.file
    console.log("New File UPLOAD", req.file);

    if (!req.file) {
      next(new Error("No file uploaded!"));
      return;
    }

    const { orginalname, secure_url, format, width, height } = req.file;

    res.json({
      fileName: orginalname,
      fileUrl: secure_url,
      format,
      width,
      height,
    });
  }
);

module.exports = router;
