const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    {
        dialect: 'postgres',
        username: 'postgres',
        password: 'example',
        database: 'testconnect',
        host: 'localhost',
        port: '5435',
    }
);
sequelize
  .authenticate().then(res => {
      console.log('connected');
  })
  .catch(err => {
      console.log(err);
      process.exit(1);
  });
  const Project = {};
  Project.carproductmodel = sequelize.import('./carproductmodel.model.js');
module.exports = Project
