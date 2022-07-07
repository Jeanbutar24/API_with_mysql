const Sequelize = require("sequelize");

const db = new Sequelize("market", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = db;
