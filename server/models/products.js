'use strict';
module.exports = (sequelize, DataTypes) => {
  var products = sequelize.define('products', {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: DataTypes.STRING,
    cost_price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    sale_price: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {});
  products.associate = function (models) {
    // associations can be defined here
  };
  return products;
};