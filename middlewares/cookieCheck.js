module.exports = (req,res,next) =>{
    if(req.cookies.communityElectro){
        req.session.userLogin = req.cookies.communityElectro
    }
    next()
}