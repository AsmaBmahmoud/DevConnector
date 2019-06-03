const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator/check');


const User = require('../../models/User');

// @route   POST api/users
// @desc    register user
// @access  Public

router.post('/', [
  check('name', 'Name is required')
  .not()
  .isEmpty(),
  check('email', 'Please include a valid amil').isEmail(),
  check('password',
  'Please enter a password with 6 or more charaters').isLength({ min: 6})
], 
async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

const { name, email, password} = req.body;

try{
// see if user exists
let user = await User.findOne({ email });

if(user) {
  return res.status(400).json({ errors: [{ msg: 'user already exists'}] });
}

// Get users gravatar
const avatar = gravatar.url(email, {
  s: '200',
  r:'pg',
  d: 'mm'
})

user = new User({
name,
email,
avatar,
password
});

// Encrypt password
const salt = await bcrypt.genSalt(10);

user.password = await bcrypt.hash(password, salt);


await user.save();
// Return json web token(jwt)



res.send('User registered');

}catch(err) {
console.error(err.message);
return res.status(500).send('server error');
}


});

module.exports = router;