'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      queryInterface.addColumn(
        'comments',
        'postId',
        {
          type :Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'posts',
            key: 'id',
          }
        }
      )
  },

  down: (queryInterface, Sequelize) => {

      queryInterface.removeColumn(
        'comments',
        'postId'
      )

  }
};
