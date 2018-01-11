'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    queryInterface.addColumn(
      'posts',
      'username',{
        type : Sequelize.STRING
      }
    )

  },

  down: (queryInterface, Sequelize) => {

      queryInterface.removeColumn(
        'posts',
        'username'
      )

  }
};
