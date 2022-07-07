const { Op } = require("sequelize");
const model = require("../model/index");

const controller = {};

controller.getAll = async function (req, res) {
  try {
    let product = await model.product.findAll({
      // attributes: ["ID", "Nama"], //to get only spesific data
      // where: {
      //   ID: {
      //     [Op.between]: [1, 5],
      //   },
      // },
      // order: [["Nama", "asc"]],
      // limit: 5,
    });

    if (product.length > 0) {
      res.json({
        message: "Get method product",
        product,
      });
    } else {
      res.json({
        message: "data Not found ",
        data: [],
      });
    }
  } catch (error) {
    res.json({
      message: error,
    });
  }
};

controller.getOne = async function (req, res) {
  try {
    let product = await model.product.findAll({
      where: {
        ID: req.params.ID,
      },
    });

    if (product.length > 0) {
      res.json({
        message: "Get One product",
        product,
      });
    } else {
      res.json({
        message: "data Not found ",
        data: [],
      });
    }
  } catch (error) {
    res.json({
      message: error,
    });
  }
};

controller.post = async function (req, res) {
  try {
    let product = await model.product.create({
      ID: req.body.ID,
      Nama: req.body.Nama,
      Jenis: req.body.Jenis,
      Berat: req.body.Berat,
      Kualitas: req.body.Kualitas,
      Warna: req.body.Warna,
      Foto: req.file.path,
    });
    res.json({
      message: "post product success",
      product,
    });
  } catch (error) {
    res.json({
      message: error,
    });
  }
};

controller.put = async function (req, res) {
  try {
    let product = await model.product.update(
      {
        Nama: req.body.Nama,
        Jenis: req.body.Jenis,
        Berat: req.body.Berat,
        Kualitas: req.body.Kualitas,
        Warna: req.body.Warna,
        Foto: req.file.path,
      },
      {
        where: {
          ID: req.body.ID,
        },
      }
    );

    if (product.length > 0) {
      res.json({
        message: "Put data success",
      });
    }
  } catch (error) {
    res.json({
      message: error,
    });
  }
};

controller.delete = async function (req, res) {
  try {
    let product = await model.product.destroy({
      where: {
        ID: req.params.ID,
      },
    });

    res.json({
      message: "delete success",
      
    });
  } catch (error) {
    res.json({
      message: error,
    });
  }
};

controller.search = async function (req, res) {
  const search = req.query.keyword;
  try {
    let product = await model.product.findAll({
      // attributes: ["ID", "Nama"], //to get only spesific data
      where: {
        [Op.or]: [
          {
            ID: {
              [Op.like]: `%${search}%`,
            },
          },
          {
            Nama: {
              [Op.like]: `%${search}%`,
            },
          },
        ],
      },
    });

    res.json({
      message: "Get method product",
      product,
    });
  } catch (error) {
    res.json({
      message: error,
    });
  }
};

module.exports = controller;
