const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');
const cors = require('cors');
const app = express();

// use
app.use(bodyParser.json());
app.use(cors());

// get requests
app.get('/buy/:pet_id', (req, res) => {
  const id = req.params.pet_id;
  console.log('\n -> Get Request on "/buy"\n -> pet_id: ', id);
  db.getPetByID(id, (err, data) => {
    if(err || !data) { 
      res.status(404).send();
      console.log('!ERROR: 100',e100,'DATA ->',data,'ERROR ->',err);
    }
    else {
      res.status(200).send(data);
      console.log('\nResponse data:\n',data);
    }
  })
})

// listening on port 4002
app.listen(process.env.PORT || "4002", _=> {console.log('Roger Roger / port 4002')});



// error messages
const e100 = 'database responded with an ERROR or an EMPTY data object';