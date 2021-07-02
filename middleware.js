const FarmError = require('./Utilities/FarmError');
const Farm = require('./models/farm');
const Review = require('./models/review');

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl
        req.flash('error', 'Login Required');
        return res.redirect('/user/login');
    }
    next();
}
module.exports.isFarmOwner = async (req, res, next) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    if (!farm.author.equals(req.user._id)) {
        req.flash('error', "You don't have permission to do that");
        return res.redirect(`/farms/${id}`);
    }
    next();
}
