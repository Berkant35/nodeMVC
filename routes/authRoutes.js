const router = require('express').Router()
const authController = require('../controllers/authController')

router.get('', authController.loginGet)
router.get('/login', authController.loginGet)
router.post('/login', authController.loginPost)
router.get('/signup', authController.signupGet)
router.post('/signup', authController.signupPost)
router.get('/logout', authController.logoutGet)

module.exports = router