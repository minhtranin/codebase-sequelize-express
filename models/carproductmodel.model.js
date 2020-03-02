// The model definition is done in /path/to/models/project.js
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('carproductmodel', {
      username: DataTypes.STRING,
      password: DataTypes.TEXT
    });
  };
