//routes.js
var express = require("express");
var router = express.Router();
let user = require("../modules/user");
var bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));



//db connectivity using mongoose
//mongoose.Promise = global.Promise;
const mongoose = require("mongoose");
const db = {};
db.mongoose = mongoose;
db.url = "mongodb://localhost:27017/nodedemo";
db.user = user;
db.mongoose
  .connect(db.url)
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });



  
const User = db.user;
router.get("/home", function (req, res) {
  res.send("its home page!!");
});


// all user  show database
router.get("/AllUsers", async function (req, res) {
    var out = await User.find();
    res.send(out);
});

// New User  add
router.post("/NewUser", async function (req, res) {
    var data = req.body;
    console.log(data);
    var obj = new User(data);
  
    var out = await User.insertMany(obj);
    res.send(out);
});

// withdrewall
router.get("/Withdrewall", async function (req, res) {
    
});



// show A/C Balance with name
router.get("/ShowBalance/:name/:cbalance", async function (req, res) {
       
});










module.exports = router;
         