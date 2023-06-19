// src/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('produto', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
