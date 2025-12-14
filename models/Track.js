const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Track = sequelize.define('Track', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  artist: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Track;
