const mongodb = require('mongodb');
const key = require('../key');
const url = `mongodb+srv://austinAdmin:${key.key}@austintestcluster-mdigu.mongodb.net/test?retryWrites=true`
const client = new mongodb.MongoClient(url, {useNewUrlParser:true});


// Get Pet By ID
const getPetByID = (id, callback) => {
  client.connect(err => {
    // if err connecting
    if (err) {
      console.log('ERR |get pet by id|', err);
      callback(err);
    } 
    // if no err connecting
    else {
      const collection = client.db('purchase').collection('pets');
      collection.find({pet_id: id}).toArray()
      .then(data => {
        callback(null, data[0]);
      })
      .catch(err => callback(err));
    }
  });
};


// add one pet to DB
const addOneToDB = (object, callback) => {
  client.connect(err => {
    // if err connecting
    if (err) {
      console.log('ERR |add one pet to DB|', err);
      callback(err);
    } 
    // if no err connecting
    else {
      const collection = client.db('purchase').collection('pets');
      collection.insertOne(object)
      .then(callback(null, 'all good'))
      .catch(err => callback(err))
    }
    client.close();
  });
};


// add array of pets to DB
const addManyToDB = (array, callback) => {
  client.connect(err => {
    if (err) {
      console.log('ERROR add one to DB');
      callback(err);
    } else {
      const collection = client.db('purchase').collection('pets');
      collection.insertMany(array);
      callback('all good');
    }
    client.close();
  });
};

module.exports = {
  getPetByID,
  addOneToDB,
  addManyToDB
}
