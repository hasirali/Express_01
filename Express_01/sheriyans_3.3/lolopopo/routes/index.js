var express = require('express');
var router = express.Router();
// jo modal banaya hai usko import karna hai
const userModel = require('./users')

// creating a cookie
// res.cookies("age",25);

// reading a cookie
// console.log(req.cookies.age)

//delete
// res.clearCookie("age")


/* GET home page. */
// CRUD operation
router.get('/', function(req, res, next) {
  req.session.bankiya= true
  res.render('index', { title: 'Express' });
});
router.get('/banned',(req,res)=>{
  if(req.session.bankiya===true){
    res.send("you are banned")
  }
  else{
    res.send("you are not banned")
  }
})

router.get('/create', async (req, res) => {
  // 1
  const createdUser = await userModel.create({
    username: "Hasir Ali",
    name: "Hasir",
    age: 21
  });
  // 2
  res.send(createdUser);
  // First, user creation will be executed, then the response will be sent
});

router.get('/alluser', async(req,res)=>{
  let allusers = await userModel.find()
  res.send(allusers)
})

module.exports = router;
