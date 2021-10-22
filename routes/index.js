const express = require('express');
const router = express.Router();

const {home, admin} = require('../controllers/indexController')

/* GET home page. */
router.get('/', home);
router.get('/admin', admin)

module.exports = router;
