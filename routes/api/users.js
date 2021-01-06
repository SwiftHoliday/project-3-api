// require modules
const router = require('express').Router();

// require the controller
const usersCtrl = require('../../controllers/users')

// signup route
router.post('/signup', usersCtrl.signup);


module.exports = router;