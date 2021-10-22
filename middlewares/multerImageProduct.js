const path = require('path');
const multer = require('multer');

/* configuración de multer */
const storage = multer.diskStorage({
    destination : (req,file,cb) => {
        cb(null,'./public/images/detailProduct')
    },
    filename : (req,file,cb) => {
        cb(null,'img-product' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage
})

module.exports = upload;