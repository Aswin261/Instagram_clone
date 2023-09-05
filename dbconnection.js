const express = require("express");
const cors = require("cors");
const { connectToDb, getDb } = require("./db");
const { ObjectId } = require("mongodb");
let db;
const app = express();
app.use(express.json());
app.use(cors());

connectToDb((err) => {
  if (!err) {
    app.listen(3001, () => {
      console.log("listening on port 3001");
    });
    db = getDb();
  }
});

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage }).single("image");

app.post("/upload-image", (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      return res.status(500).json({ error: "Could not upload image" });
    }
    res.status(200).json({ message: "Image uploaded successfully" });
  });
});
