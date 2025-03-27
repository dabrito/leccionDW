'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const servicios = [
      { nombre: 'Servicio A', descripcion: 'Desc A', precio: 100, supervisor: 'Supervisor A' },
      { nombre: 'Servicio B', descripcion: 'Desc B', precio: 200, supervisor: 'Supervisor B' },
      { nombre: 'Servicio C', descripcion: 'Desc C', precio: 300, supervisor: 'Supervisor C' },
      { nombre: 'Servicio D', descripcion: 'Desc D', precio: 400, supervisor: 'Supervisor D' },
      { nombre: 'Servicio E', descripcion: 'Desc E', precio: 500, supervisor: 'Supervisor E' }
    ];
    await queryInterface.bulkInsert('servicios', servicios, {});

    const serviciosxarea = [
      { id_servicio: 1, id_area: 1, servicios_id_servicio: 1, areas_id_area: 1 },
      { id_servicio: 2, id_area: 2, servicios_id_servicio: 1, areas_id_area: 2 },
      { id_servicio: 3, id_area: 3, servicios_id_servicio: 2, areas_id_area: 2 },
      { id_servicio: 4, id_area: 4, servicios_id_servicio: 2, areas_id_area: 3 },
      { id_servicio: 5, id_area: 5, servicios_id_servicio: 3, areas_id_area: 4 },
      { id_servicio: 6, id_area: 6, servicios_id_servicio: 3, areas_id_area: 5 },
      { id_servicio: 7, id_area: 7, servicios_id_servicio: 4, areas_id_area: 5 },
      { id_servicio: 8, id_area: 8, servicios_id_servicio: 4, areas_id_area: 6 },
      { id_servicio: 9, id_area: 9, servicios_id_servicio: 5, areas_id_area: 6 },
      { id_servicio: 10, id_area: 10, servicios_id_servicio: 5, areas_id_area: 7 }
    ];
    return queryInterface.bulkInsert('serviciosxareas', serviciosxarea, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('serviciosxareas', null, {});
    return queryInterface.bulkDelete('servicios', null, {});
  }
};
