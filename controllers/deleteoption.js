const { Op} = require("sequelize");

const db = require("../models");
var optionmaster = db.optionmasters;
var selectmaster = db.selectmasters;

try{
var deleteoption = async (req, res) => {
    id = req.body
    console.log("id",id.id)
  var data = await optionmaster.destroy({
    where: {
      id: {
        [Op.in]: id.id
      },
    },
  });
  res.status(200).json({ data: data });
};
}
catch{
    console.log("server error")
}

try {
  var deleteMultipleOption = async (req, res) => {
    var data = await optionmaster.destroy({
      where: {
        selectId: 1,
      },
    });
    if (data > 0) {
      await selectmaster.destroy({
        where: {
          id: 1,
        },
      });
    }
    res.status(200).json({ data: data });
  };
} catch (error) {
  console.log("error", error);
  console.log(error.name);
}
module.exports = { deleteoption, deleteMultipleOption };
