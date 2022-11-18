const User = require('../../models/user')
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt')

module.exports = {
    create,
    login,
    checkToken
  };
  

  async function login(req, res){
    try{
    const user = await User.findOne({email: req.body.email})
    if(!user) throw new Error()
    const match = await bcrypt.compare(req.body.password, user.password)
    if (!match) throw new Error()
    res.json(createJWT(user))
    } catch{
      res.status(400).json('bad credentials')
    }
  }

  // controllers/api/users.js

  async function create(req, res) {
    
    // res.json({
    //   user: {
    //     name: req.body.name,
    //     email: req.body.email
    //   }
    // })
    try {
      // Add the user to the database
      const user = await User.create(req.body);
      // token will be a string
      // res.json(user)
      const token = createJWT(user);
      // Yes, we can use res.json to send back just a string
      // The client code needs to take this into consideration
      res.json(token);
    } catch (err) {
      // Client will check for non-2xx status code 
      // 400 = Bad Request
      res.status(400).json(err);
    }
  }
  
  /*-- Helper Functions --*/

function createJWT(user) {
    return jwt.sign(
      // data payload
      { user },
      process.env.SECRET,
      { expiresIn: '24h' }
    );
  }

  function checkToken(req, res) {
    // req.user will always be there for you when a token is sent
    console.log('req.user', req.user);
    res.json(req.exp);
  }