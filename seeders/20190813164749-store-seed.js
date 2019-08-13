'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Stores', [{
        id: 1,
        name: 'The Game Store',
        phoneNumber: 1234567890,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: 2,
        name: 'The Other Game Store',
        phoneNumber: 1987654321,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stores', null, {});
  }
};
