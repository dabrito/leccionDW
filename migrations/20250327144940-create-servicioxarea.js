'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('serviciosxareas', {
      id_servicio: {
        allowNull: false,
        // primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_area: {
        allowNull: false,
        // primaryKey: true,
        type: Sequelize.INTEGER
      },

      servicios_id_servicio: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // primaryKey: true,
        references: {
          model: 'servicios',   
          key: 'id_servicio'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      areas_id_area: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // primaryKey: true,
        references: {
          model: 'areas',
          key: 'id_area'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
    });
    await queryInterface.addConstraint('serviciosxareas', {
      fields: ['id_servicio', 'id_area', 'servicios_id_servicio', 'areas_id_area'],
      type: 'primary key',
      name: 'serviciosxareas_pkey'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('serviciosxareas');
  }
};