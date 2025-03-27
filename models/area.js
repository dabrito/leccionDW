'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class area extends Model {
    static associate(models) {
      // define association here
      // models.areas.belongsToMany(models.servicios, { through: 'serviciosxareas', foreignKey: 'areas_id_area', otherKey: 'servicios_id_servicio'});
    }
  }
  area.init({
    id_servicio: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'area',
    tableName: 'areas'
  });
  return area;
};