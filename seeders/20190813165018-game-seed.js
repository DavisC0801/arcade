'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Games', [{
      title: "Tron",
      price: 100,
      releaseYear: 1982,
      active: true,
      StoreId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: "Space Invaders",
      price: 50,
      releaseYear: 1978,
      active: true,
      StoreId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: "Street Fighter II",
      price: 75,
      releaseYear: 1991,
      active: false,
      StoreId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: "Dance Dance Revolution",
      price: 125,
      releaseYear: 1998,
      active: true,
      StoreId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Games', null, {});
  }
};
