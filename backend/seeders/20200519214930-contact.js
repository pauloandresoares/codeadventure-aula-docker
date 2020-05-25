'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('contacts', [
      {
        name: 'Paulo André',
        phone: '(11) 9999-9999',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'José da Silva',
        phone: '(11) 8888-8888',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Grabriela Rocha',
        phone: '(11) 7777-7777',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Maria José',
        phone: '(11) 7777-7777',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], 
    {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('People', null, {});
  }
};
