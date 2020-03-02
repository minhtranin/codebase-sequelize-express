// The model definition is done in /path/to/models/project.js
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('connect2', {
      name: DataTypes.STRING,
      pass: DataTypes.TEXT
    });
  };
