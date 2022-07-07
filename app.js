const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

// const connect_db = require("./config/database/mysql");
const productRouter = require("./router/product/product");
const orderRouter = require("./router/order/order");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/product", productRouter);
app.use("/order", orderRouter);
app.use("/assets", express.static("assets"));

module.exports = app;
