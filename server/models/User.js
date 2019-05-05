const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  providerUserId: {
    type: String,
    required: true
  },
  provider: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);
