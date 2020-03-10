module.exports = {
    eAdmin: function(req, res, netx){
        if(req.isAuthenticated() && req.user.eAdmin == 1){
            return netx();
        }
        req.flash("error_msg", "Você precisa ser um Admin!")
        res.redirect("/")
    }
}