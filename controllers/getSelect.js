const db = require("../models");
var optionmaster = db.optionmasters;
var selectmaster = db.selectmasters;

try {
  var getSelect = async (req, res) => {
    const selectId = req.query.selectId;
    const type = req.query.type;
    const selectname = req.query.selectname;
    console.log("selectId", selectId);
    console.log("type", type);
    const data = await optionmaster.findAll({
      where: {
        selectId: selectId,
      },
    });

    if (type == "radio") {
      radio = "";
      for (let i = 0; i < data.length; i++) {
        radio += `
    <input type="radio" name="radio" value="${data[i].name}">
    <label>${data[i].name}</label><br>
    `;
      }
      res.send(radio);
    }

    if (type == "checkbox") {
      checkbox = "";
      for (let i = 0; i < data.length; i++) {
        checkbox += `
    <input type="checkbox" name="checkbox" value="${data[i].name}">
    <label>${data[i].name}</label><br>
    `;
      }
      res.send(checkbox);
    }

    if (type == "selectbox") {
      var selectbox = "";
      selectbox += `<lable for='${selectname}'> ${selectname} </lable> <select name='${selectname}'>`;

      for (let i = 0; i < data.length; i++) {
        selectbox += `<option value='${data[i].name}'> ${data[i].name} </option>`;
      }

      selectbox += `</select>`;
      res.send(selectbox);
    }
  };
} catch (error) {
  console.log("error", error);
  console.log(error.name);
}
module.exports = { getSelect };
