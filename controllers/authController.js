const User = require('../models/users')
const jwt = require('jsonwebtoken')
var alert = require('alert');
const maxAge = 60 * 60 * 24
const createToken = (id) => {
    return jwt.sign({ id }, 'gizli kelime', { expiresIn: maxAge })
}

const loginGet = (req, res) => {
    try {
        res.render('login', { title: 'Giriş' })
    } catch (err) {
        console.log(err);
    }
}

const loginPost = async(req, res) => {
    const { username, password } = req.body
    try {
        const user = await User.login(username, password)
        const token = createToken(user._id)
        console.log(token);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
        res.redirect('/admin')
    } catch (err) {
        alert(err.message)
    }
}

const signupGet = (req, res) => {
    res.render('signup', { title: 'Kayıt' })
}

const signupPost = (req, res) => {

    const user = new User(req.body)

    user.save().then((result) => {
        res.redirect('/login')
    }).catch((err) => {
        res.send("<script> alert('Error Message'); window.location =  '/signup'; </script>")
        console.log(err)
    })
}
const logoutGet = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 })
    res.redirect('/login')
}

module.exports = {
    loginGet,
    loginPost,
    signupGet,
    signupPost,
    logoutGet
}