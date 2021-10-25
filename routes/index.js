const express = require('express');
const router = express.Router();

const {home, admin} = require('../controllers/indexController');
const adminUserCheck = require ('../middlewares/adminUserCheck');

/* GET home page. */
router.get('/', home);
router.get('/admin',adminUserCheck, admin);


module.exports = router;
