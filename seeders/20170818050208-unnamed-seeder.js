'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "burgers",
      [
        {
          burger_name: "Numb Burger",
          devoured: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          burger_name: "Numb Burger",
          devoured: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          burger_name: "The Salmon Rushdie",
          devoured: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          burger_name: "Teddy's Biggest Burger",
          devoured: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          burger_name: "The Hamburg Burger",
          devoured: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("burgers", null, { truncate: true });
  }
};
