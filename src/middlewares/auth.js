export const verifyAuth = (req, res, next) => {
    if(req.session.user){
        return next();
    }
    return res.render("login");
}