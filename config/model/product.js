const Sequelize = require("sequelize");
const db = require("../database/mysql");

const product = db.define(
  "product",
  {
    ID: Sequelize.INTEGER,
    Nama: Sequelize.STRING,
    Jenis: Sequelize.STRING,
    Berat: Sequelize.STRING,
    Kualitas: Sequelize.STRING,
    Warna: Sequelize.STRING,
    Foto: Sequelize.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
product.removeAttribute("id");
module.exports = product;
