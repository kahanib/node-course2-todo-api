var mongoose = require('mongoose')

var User = mongoose.model('User', {
  User:{
    type: String,

  },
  email:{
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
})


module.export = {User}
