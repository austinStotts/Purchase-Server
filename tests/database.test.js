const db = require('../app/database');


const pet = {
  "pet_id":"9999",
  "class":"mammal",
  "family":"important",
  "genus":"gross",
  "species":"human",
  "price":"infinity"
}

beforeEach(() => {
  db.addOneToDB(pet);
});

afterEach(() => {
  db.deleteOneFromDB(pet.pet_id);
});

test('can get pet object from database', done => {
  db.getPetByID(pet.pet_id, (err, data) => {
    expect(data.species).toEqual('human');
    expect(data.price).toEqual('infinity');
    expect(data.genus).toEqual('gross');
    expect(data.family).toEqual('important');
    expect(data.class).toEqual('mammal');
  })
  done();
})
