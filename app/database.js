const mongodb = require('mongodb');
const key = require('../key');

const url = `mongodb+srv://austinAdmin:${key.key}@austintestcluster-mdigu.mongodb.net/test?retryWrites=true`
const client = new mongodb.MongoClient(url, {useNewUrlParser:true});

const getPetByID = (id, callback) => {
  client.connect(err => {
    const collection = client.db('purchase').collection('pets');
    collection.find({pet_id: id}).toArray().then(data => {
      //console.log(data[0]);
      callback(data[0]);
      client.close();
      
    });
  });
};

const addOneToDB = (object, callback) => {
  client.connect(err => {
    if (err) {
      console.log('ERROR add one to DB');
      callback(err);
    } else {
      const collection = client.db('purchase').collection('pets');
      collection.insertOne(object);
      callback('all good');
    }
    client.close();
  });
}

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
}

module.exports = {
  getPetByID,
  addOneToDB,
  addManyToDB
}
