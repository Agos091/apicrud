

const { timeStamp } = require('console');
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const produto = sequelize.define('produtos', {
  codigo_produto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome_produto: {
    type: DataTypes.STRING,
    allowNull: false
  },
  desc_produto: {
    type: DataTypes.STRING,
    allowNull: false
  }
 },{timestamps:false,
    freezeTableName: true } );

module.exports = produto;
