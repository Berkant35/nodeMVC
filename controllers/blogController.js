const Blog = require('../models/blogs')

const blogIndex = (req, res) => {
    Blog.find()
        .then((result) => {
            res.render('index', { title: 'Anasayfa', blogs: result })
        }).catch((err) => {
            console.log(err);
        })
}

const blogFindById = (req, res) => {
    const id = req.params.id
    Blog.findById(id)
        .then((result) => {
            res.render('blog', { blog: result, title: 'Detay' })
        }).catch((err) => {
            res.status(404).render('404', { title: 'Hata' })
        })
}

module.exports = {
    blogIndex,
    blogFindById
}