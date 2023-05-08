// const insert_select_master =require("../repository/insertSelectMaster.repository").insert_select_master;
const db = require("../models");
var optionmaster = db.optionmasters;
var selectmaster = db.selectmasters;
try {
  var insertSelectMaster = async (req, res) => {
    const selectmasterdata = req.body;
    const data = await selectmaster.bulkCreate(selectmasterdata, {
      include: [optionmaster],
    });
    res.status(200).json({ data: data });
  };
} catch (error) {
  console.log("error", error);
  console.log(error.name);
}

module.exports = { insertSelectMaster };
