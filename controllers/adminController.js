const Blog = require('../models/blogs')

const adminIndex = (req, res) => {
    Blog.find()
        .sort({
            createdAt: 1
        })
        .then((result) => {
            res.render('admin', { title: 'Admin Paneli', blogs: result })
        }).catch((err) => {
            console.log(err);

        })
}

const adminAdd = (req, res) => {
    const blog = new Blog(req.body)
    blog.save()
        .then((result) => {
            res.redirect('/admin')
        })
        .catch((err) => console.log(err))
}


const deleteById = (req, res) => {
    const id = req.params.id
    Blog.findByIdAndDelete(id).then(
        (result) => {
            res.json({ link: '/admin' })
        }).catch((err) => {
        console.log(err);
    })
}

const adminAddGet = (req, res) => {
    res.render('add', { title: 'Yeni yazı' })
}

module.exports = {
    adminIndex,
    adminAdd,
    deleteById,
    adminAddGet
}