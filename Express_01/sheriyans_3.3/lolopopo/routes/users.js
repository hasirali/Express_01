const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/AMAZON")

// yeh schema banane ke liye hai
const userSchema = mongoose.Schema({
  usernam:String,
  name:String,
  age: Number,
})

// yeh model banane ke liye hai aur usko export karne ke liye
module.exports = mongoose.model('User', userSchema);