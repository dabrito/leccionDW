'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class servicios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.servicios.belongsToMany(models.areas, { through: 'serviciosxareas', foreignKey: 'servicios_id_servicio', otherKey: 'areas_id_area'});
    }
  }
  servicios.init({
    id_servicio: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    supervisor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'servicio',
    tableName: 'servicios',
  });
  return servicios;
};