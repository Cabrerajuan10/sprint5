const fs = require('fs');
const path = require ('path');
const products = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8'));
const categories = require('../data/categories.json');
const shuffle = array => array.sort(() => Math.random() - 0.5);

module.exports = {

    home : (req,res) => {
        return res.render('home',{
            title : "Community Electro",
            ofertas : shuffle(products.filter(product => product.category === 'oferta')).splice(0,4),
            products:  JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8')),
            categories
        })
    },

    admin : (req,res) => {
        return res.render('admin',{
            title : "Administración",
            products: JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8')),
            categories
        })
    }

}