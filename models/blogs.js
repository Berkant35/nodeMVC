const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Bir schema oluşturulur..
const blogSchema = new Schema({
        title: {
            type: String,
            require: true,
        },
        short: {
            type: String,
            require: true
        },
        long: {
            type: String,
            require: true
        }
    }, {
        timestamp: true
    })
    //Kendi modelimizi burda oluşturuyoruz 2 tane parametre alıyor bir id koleksiyoon adı gibi 2.cisi de yukarda belirtiğimiz schemayı veriyoruz...
const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog