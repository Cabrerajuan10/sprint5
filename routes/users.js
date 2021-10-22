const express = require('express');
const router = express.Router();
const loginValidator = require('../validations/loginValidator')

const {register,processRegister,login,processLogin,logout} = require ('../controllers/usersController')

/* GET users listing. */
router
.get('/register', register)
.post('/register',processRegister)
.get('/login', login)
.post('/login', loginValidator, processLogin)
.get('/logout',logout)

module.exports = router;
