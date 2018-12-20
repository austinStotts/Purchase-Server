const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');
const app = express();
const data = require('../data');

// use
app.use(bodyParser.json());

// const pets = [
//   {
//     '_id':'02',
//     'catagory':'big-cat',
//     'type':'tiger',
//     'price':'48,000'
//   },
//   {
//     '_id':'03',
//     'catagory':'big-cat',
//     'type':'cheeta',
//     'price':'35,000'
//   },
//   {
//     '_id':'04',
//     'catagory':'big-cat',
//     'type':'jaguar',
//     'price':'50,000'
//   }
// ];

//db.addManyToDB(data.pets, res => console.log(res));



app.get('/pet', (req, res) => {
  const id = req.body.pet_id;
  db.getPetByID(id, data => {
    res.send(data);
  })
})

app.listen(4000, _=> {console.log('Roger Roger / port 4000')});
