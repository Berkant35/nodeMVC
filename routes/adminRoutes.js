const express = require('express')
const Blog = require('../models/blogs')
const router = express.Router()
const adminController = require('../controllers/adminController')

router.get('/', adminController.adminIndex)
router.post('/add', adminController.adminAdd)
router.delete('/delete/:id', adminController.deleteById)
router.get('/add', adminController.adminAddGet)


module.exports = router