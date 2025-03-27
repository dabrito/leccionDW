'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class serviciosxareas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // models.serviciosxareas.belongsTo(models.servicios, { foreignKey: 'servicios_id_servicio' });
      // models.serviciosxareas.belongsTo(models.areas, { foreignKey: 'areas_id_area' });
    }
  }
  serviciosxareas.init({
    id_servicio: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'serviciosxareas',
  });
  return serviciosxareas;
};