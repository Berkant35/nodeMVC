const express = require('express')
const Blog = require('../models/blogs')
const blogController = require('../controllers/blogController')
const routeBlog = express.Router()

routeBlog.get('/', blogController.blogIndex)
routeBlog.get('/:id', blogController.blogFindById)

module.exports = routeBlog