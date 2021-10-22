const bcrypt = require('bcryptjs');
const path = require ('path');
const fs = require('fs');
const users = require(path.join(__dirname,'../data/users.json'))
const {validationResult} = require('express-validator');

module.exports = {

    register : (req,res) =>{
        return res.render('register', {
            title: "Registro"
        })
    },

    processRegister : (req,res)=>{
       /*  return res.send(req.body) */
        const {name,email,password} = req.body;

        let user = {
            id : users.length != 0 ? users[users.length - 1].id + 1 : 1,
            name : name.trim(),
            email : email.trim(),
            password : bcrypt.hashSync(password,10),
            avatar : 'avatar-default.jpg',
            rol : "user"
        }
        users.push(user);
        fs.writeFileSync(path.join(__dirname,'../data/users.json'),JSON.stringify(users,null,3),'utf-8');
        return res.redirect('/')
    },
        
    login : (req,res) =>{
        return res.render('login', {
            title: "Login"
        })
    },

    processLogin : (req,res) => {
        let errors = validationResult(req);
        
        if(errors.isEmpty()){
            let user = users.find(user => user.email === req.body.email);
            req.session.userLogin = {
                id : user.id,
                name : user.name,
                avatar : user.avatar,
                rol : user.rol
            }
            return res.redirect('/')
        }else{
            return res.render('login',{
                errores : errors.mapped()
            })
        }
    },

    logout : (req,res) =>{
        req.session.destroy()
        res.redirect('/')
    }
} 