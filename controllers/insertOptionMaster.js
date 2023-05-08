const db = require("../models");
var optionmaster = db.optionmasters;
var selectmaster = db.selectmasters;

try{
var insertOptionMaster = async(req,res)=>{
    const optionmasterdata=req.body
    const data = await optionmaster.bulkCreate(optionmasterdata);
res.status(200).json({ data: data });
}
}
catch(error){
    console.log("error",error)
    console.log(error.name)
}
module.exports = { insertOptionMaster };