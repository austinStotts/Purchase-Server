const mongodb = require('mongodb');
const key = {key:'05110511as'};
const url = `mongodb://austinAdmin:${key.key}@austintestcluster-shard-00-00-mdigu.mongodb.net:27017,austintestcluster-shard-00-01-mdigu.mongodb.net:27017,austintestcluster-shard-00-02-mdigu.mongodb.net:27017/test?ssl=true&replicaSet=AustinTestCluster-shard-0&authSource=admin&retryWrites=true`
const client = new mongodb.MongoClient(url);

// Get Pet By ID
const getPetByID = (id, callback = () => {console.log('no callback')}) => {
  client.connect(err => {
    // if err connecting
    if (err) {
      console.log('ERR |get pet by id|', err);
      callback(err);
    } 
    // if no err connecting
    else {
      const collection = client.db('purchase').collection('pets');
      // findOne returns an object not an array of objects
      // it actually returns a promise that resolves to an object
      collection.findOne({pet_id: id})
      .then(data => {
        callback(null, data);
      })
      .catch(err => callback(err));
    }
  });
};

// add one pet to DB
const addOneToDB = (object, callback = _=> {console.log('no callback')}) => {
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
      .then(callback(null, 'success'))
      .catch(err => callback(err))
    }
    client.close();
  });
};

// add array of pets to DB
const addManyToDB = (array, callback = _=> {console.log('no callback')}) => {
  client.connect(err => {
    if (err) {
      console.log('ERROR add one to DB');
      callback(err);
    } else {
      const collection = client.db('purchase').collection('pets');
      collection.insertMany(array)
      .then(res => callback(null,res))
      .catch(err => callback(err))
    }
    client.close();
  });
};

// delete one pet from DB
const deleteOneFromDB = (object, callback = _=> {console.log('no callback')}) => {
  client.connect(err => {
    if(err) {
      console.log('ERROR delete one from DB');
      callback(err);
    } else {
      const collection = client.db('purchase').collection('pets');
      collection.deleteOne({pet_id:object})
      .then(res => {
        console.log("removed with no err")
        callback(null,res);
      })
      .catch(err => console.log(err))
    }
    client.close();
  })
};

module.exports = {
  getPetByID,
  addOneToDB,
  addManyToDB,
  deleteOneFromDB
}
