const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  date_of_birth: { type: Date, required: true },
  password: { type: String, required: true }
});

const userSchema = mongoose.model("user", UserSchema, "clients      ");
module.exports = userSchema;