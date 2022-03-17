const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blogs')
const cookieParser = require('cookie-parser')
const adminRoute = require('./routes/adminRoutes')
const blogRoute = require('./routes/blogRoutes')
const authRoute = require('./routes/authRoutes')

const { render, redirect } = require('express/lib/response')
const res = require('express/lib/response')

const app = express()

const dbUrl = 'mongodb+srv://berkant:159753@blog.bord1.mongodb.net/node-blog?retryWrites=true&w=majority';

mongoose.connect(
        dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch((err) => console.log('Err', err))



app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true })) // Extented iç içer json verisi göndermemizi olanak sağlayan yapıya denir.


app.use(morgan('dev'))

//app.use(cookieParser)
app.use('/', authRoute)
app.use('/admin', adminRoute)
app.use('/blog', blogRoute)


app.get('/about', (req, res) => {
    res.render('about', { title: 'Hakkımızda' })
})

app.use((req, res) => {
    res.status(404).render('404', { title: 'Hata' })
})

app.listen(3000, () => {

    console.log("3000 PORTU AYAKLANDI...");


})


//Basic
/**
 * app.get('/all', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            console.log(err)
        })
})


app.get('/add', (req, res) => {
    const blog = new Blog({
        title: 'Yeni yazı',
        short: 'Kısa açıklama',
        long: 'Uzun açıklama'
    })

    blog.save().then((result) => {
        res.send(result)
    }).catch((err) => {
        console.log(err);
    })
})
app.get('/single', (req, res) => {
    Blog.findById('622a4f839816cc9dec6cc5d3')
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            console.log(err);
        })
})
 */