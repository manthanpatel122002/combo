var express = require("express");
var app = express();

var home = require("../controllers/home").home;
var insertSelectMaster =require("../controllers/insertSelectMaster").insertSelectMaster;
var insertOptionMaster =require("../controllers/insertOptionMaster").insertOptionMaster;
var getSelect = require("../controllers/getSelect").getSelect;
var deleteoption = require("../controllers/deleteoption").deleteoption;
var deleteMultipleOption =require("../controllers/deleteoption").deleteMultipleOption;
var updateOption = require("../controllers/updateOption").updateOption;










app.get("/home", home);

app.post("/insertSelectMaster", insertSelectMaster);
app.post("/insertOptionMaster", insertOptionMaster);

app.get("/getSelect", getSelect);

app.delete("/deleteoption", deleteoption);
app.delete("/deleteMultipleOption", deleteMultipleOption);

app.put("/updateOption", updateOption);





module.exports = app;