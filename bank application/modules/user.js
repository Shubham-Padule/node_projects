//user.js
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  cId: {
    type: Number,
    default: 0,
  },
  cName: {
    type: String,
    required: true,
    default: "",
  },
  cAcoountno: {
    type: String,
  },
  cBalance: {
    type: Number,
    default: 0,
  },
  date_of_transaction: {
    type: Date,
   
 

  }
  
});
  

const userSchema = mongoose.model("user", UserSchema, "bankuser");
module.exports = userSchema;
