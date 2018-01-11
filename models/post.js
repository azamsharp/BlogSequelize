'use strict';
module.exports = (sequelize, DataTypes) => {
  var post = sequelize.define('post', {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  }, {});


  post.associate = function(models) {
    post.hasMany(models.comment, { as : 'comments' ,foreignKey : 'postId'})
  }


  return post;
};
