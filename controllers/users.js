// require modules
const User = require('../models/user')


// handle exports
module.exports = {
    signup
};


async function signup(req, res) {
    try {
        const user = await User.create(req.body);
        res.json({ user })
    } catch (error) {
        res.status(400).json({ msg: 'bad request' });
    }
}