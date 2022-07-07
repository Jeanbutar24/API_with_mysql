const express = require("express");
const router = express.Router();
const db = require("../../config/database/mysql");

router.get("/", (req, res, next) => {
  res.status(200);
  res.json({
    message: "order ready",
  });
});
router.post("/:orderID", (req, res, next) => {
  const id = req.params.orderID;
  res.status(200);
  res.json({
    message: `order ${id} ready`,
  });
});
router.delete("/:orderID", (req, res, next) => {
  res.status(200);
  res.json({
    message: "order deleted",
    id: req.params.orderID,
  });
});

module.exports = router;
