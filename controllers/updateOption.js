const { Op } = require("sequelize");
const db = require("../models");
var optionmaster = db.optionmasters;
var selectmaster = db.selectmasters;

try {
  var updateOption = async (req, res) => {
    name = req.query.name;
    updatedName = req.body;
    var data = await optionmaster.update(updatedName, {
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
    });
    res.status(200).json({ data: data });
  };
} catch (error) {
  console.log("error", error);
  console.log(error.name);
}

module.exports = { updateOption };
