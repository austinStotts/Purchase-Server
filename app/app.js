const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');
const app = express();
const data = require('../data');

// use
app.use(bodyParser.json());

app.get('/pet', (req, res) => {
  console.log('GET REQUEST')
  const id = req.body.pet_id;
  db.deleteOneFromDB(id, (err,data) => {
    res.send(data);
  })
})

app.listen(4000, _=> {console.log('Roger Roger / port 4000')});
