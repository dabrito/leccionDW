'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const areas = [
      { nombre: 'Tecnología de la Información', descripcion: '...' },
      { nombre: 'Recursos Humanos', descripcion: '...' },
      { nombre: 'Finanzas', descripcion: '...' },
      { nombre: 'Marketing', descripcion: '...' },
      { nombre: 'Atención al Cliente', descripcion: '...' },
      { nombre: 'Logística', descripcion: '...' },
      { nombre: 'Producción', descripcion: '...' },
      { nombre: 'Salud y Seguridad', descripcion: '...' },
      { nombre: 'Investigación y Desarrollo', descripcion: '...' },
      { nombre: 'Ventas', descripcion: '...' }
    ];
    return queryInterface.bulkInsert('areas', areas, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('areas', null, {});
  }
};
