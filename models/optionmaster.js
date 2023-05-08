'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class optionmaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
         optionmaster.belongsTo(models.selectmasters,{foreignKey:"selectId"});
      // define association here
    }
  }
  optionmaster.init({
    selectId: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'optionmasters',
  });

  return optionmaster;
};