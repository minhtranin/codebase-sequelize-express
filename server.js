const express = require("express");
const app = express();

app.listen('9000',_ => {
    console.log('connected');
})

const Sequelize = require('sequelize');

//const Project = sequelize.import(__dirname + "/models");
// const sequelize = new Sequelize(
//     {
//         dialect: 'postgres',
//         username: 'postgres',
//         password: 'example',
//         database: 'testconnect',
//         host: 'localhost',
//         port: '5432',
//     }
// );
// sequelize
//   .authenticate().then(res => {
//       console.log('connected');
//   })
//   .catch(err => {
//       console.log(err);
//       process.exit(1);
//   });
//   const Project = {};
// Project.carproductmodel = sequelize.import('./models/carproductmodel.model.js');
const Project = require('./models');
const Project2 = require('./models/models/')
app.get('/connect1',(_,res)=>{
    Project.carproductmodel.findAll().then(e=>{
        console.log(e);
    })
    return res.send("ok connect");
});
//
app.get('/connect2',(_,res)=>{
    Project2.connect2.findAll().then(e=>{
        console.log(e);
    })
    return res.send("ok connect");
});
//
app.get('/both',async (_,res)=>{
   const cn1 = await Project.carproductmodel.findAll();
   const cn2 = await Project2.connect2.findAll();
   console.log('connect 1', cn1);
   console.log('connect 2', cn2);
    res.send('done!');
})
app.get('/connect2/c',async (_,res)=>{
    const b =await Project2.connect2.create({
        name:"m",
        pass:"pro"
    })
    return res.send(b);
 })

//

