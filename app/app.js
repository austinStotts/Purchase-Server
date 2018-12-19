const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const colors = require('colors');
const db = require('./database');
const app = express();

// use
app.use(bodyParser.json());

// import getPetByID
db.getPetByID('01');
app.listen(4000, _=> {console.log('Roger Roger / port 4000')});
