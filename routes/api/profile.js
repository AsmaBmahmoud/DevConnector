const express = require('express');
const router = express.Router();
const auth = require ('../../middleware/auth');

const Profile = require('../../models/profile');
const User = require('../../models/User');

// @route   GET api/profile/me
// @desc    TGet current users profile
// @access  Public

router.get('/me', auth, async (req, res) => {
try {
const profile = await Profile.findOne({ user: req.user.id}).populate('user', ['name', 'avatar']);

if(!profile) {
  return res.status(400).json({ msg : 'there is no profile for yhis user'});
}

res.json(profile);
}catch(err) {
  console.error(err.messsage);
  res.status(500).send('server error')
}
});

module.exports = router;