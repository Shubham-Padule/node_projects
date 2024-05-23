const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  uName: {
    type: String,
    required: true
  },
  uCity: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("User", userSchema);
