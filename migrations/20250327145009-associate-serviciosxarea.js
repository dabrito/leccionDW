'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // await queryInterface.addConstraint('serviciosxareas', {
    //   fields: ['id_servicio'],
    //   name: 'servicio_id_fk',
    //   type: 'foreign key',
    //   references: {
    //   table: 'servicios',
    //   field: 'id_servicio'
    //   },
    //   onDelete: 'cascade',
    //   onUpdate: 'cascade'
    //   });

    //   await queryInterface.addConstraint('serviciosxareas', {
    //     fields: ['id_area'],
    //     name: 'area_id_fk',
    //     type: 'foreign key',
    //     references: {
    //     table: 'areas',
    //     field: 'id_area'
    //     },
    //     onDelete: 'cascade',
    //     onUpdate: 'cascade'
    //     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('serviciosxareas', 'servicios_id_servicio_fk');
    await queryInterface.removeConstraint('serviciosxareas', 'areas_id_area_fk');
  }
};
