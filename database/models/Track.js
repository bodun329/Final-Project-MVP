const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./User').sequelize; // or your main sequelize connection

const Track = sequelize.define('Track', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  artist: {
    type: DataTypes.STRING,
    allowNull: false
  },
  audioUrl: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Track;
