const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multerImageProduct');
const {detail, carrito, add, store, edit, update, search, filter, destroy} = require('../controllers/productsController');
const adminUserCheck = require ('../middlewares/adminUserCheck');

/* GET home page. */
router.get('/detailProduct/:id', detail);
router.get('/carrito', carrito);
router.get('/add',adminUserCheck, add);
router.post('/add', upload.array('image'), store);
router.get('/edit/:id',adminUserCheck, edit);
router.put('/update/:id', update)
router.get('/search', search);
router.get('/filter', filter);
router.delete('/destroy/:id', destroy)

module.exports = router;