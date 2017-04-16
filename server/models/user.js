var mongoose = require('mongoose');
let User = mongoose.model('User', {
   email: {
      type: String,
      required: true,
      trim: true
   }
})

module.exports = User