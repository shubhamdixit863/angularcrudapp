const mongoose = require('mongoose');
// schema maps to a collection
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: {
    type: 'String',
   
  },
  lastname:String,
  email:String,
  name:String,
  phone:String,
  requirements:[String],

  address:String
});

module.exports = mongoose.model('user', userSchema);