const express = require("express");
const db = require("../../config/database/mysql");
const router = express.Router();
const controller = require("../../config/controller/index");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.get("/", controller.product.getAll);
router.get("/search", controller.product.search);
router.get("/:ID", controller.product.getOne);
router.post("/", upload.single("Foto"), controller.product.post);
router.put("/", upload.single("Foto"), controller.product.put);
router.delete("/:ID", controller.product.delete);

module.exports = router;
