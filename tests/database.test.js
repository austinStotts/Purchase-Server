const db = require('../app/database');

test('can store pet object in database.', _=> {
  db.addOneToDB({'_id':'05','catagory':'big-cat','type':'cougar','price':'23,000'}, _=> {
    db.getPetByID('05', data => {expect(data.type).toBe('cougar')})
  })
})
