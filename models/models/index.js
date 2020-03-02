const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    {
        dialect: 'postgres',
        username: 'postgres',
        password: 'tcm',
        database: 'postgres',
        host: 'localhost',
        port: '5433',
    }
);
sequelize
  .authenticate().then(res => {
      console.log('connected3');
  })
  .catch(err => {
      console.log(err);
      process.exit(1);
  });
  const Project = {};
  Project.connect2 = sequelize.import('./connect2.model.js');
module.exports = Project
