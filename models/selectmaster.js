'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class selectmaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      selectmaster.hasMany(models.optionmasters, { foreignKey: "selectId" });
      // define association here
    }
  }
  selectmaster.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "selectmasters",
    }
  );

  

  return selectmaster;
};