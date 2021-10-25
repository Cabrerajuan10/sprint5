const express = require('express');
const router = express.Router();
const loginValidator = require('../validations/loginValidator');
const registerValidator = require('../validations/registerValidator');

const {register,processRegister,login,processLogin,logout,profile} = require ('../controllers/usersController')

/* GET users listing. */
router
.get('/register', register)
.post('/register',registerValidator,processRegister)
.get('/login', login)
.post('/login', loginValidator, processLogin)
.get('/logout',logout)
.get('/profile',profile)


module.exports = router;
