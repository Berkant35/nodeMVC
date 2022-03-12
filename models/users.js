const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const { schema } = require('./blogs')


const userScheme = new mongoose.Schema({
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            requried: true,

        }
    })
    // statics işlemlerimizini model üzerinde yapmak istiyorsak koyarız normal funcsiyon aaslında
userScheme.statics.login = async function(username, password) {
    const user = await this.findOne({ username })
    if (user) {
        const auth = await bcrypt.compare(password, user.password)
        if (auth) {
            return user;
        } else {
            throw Error('Password not correct')
        }
    } else {
        throw Error('Not found user')
    }
}


// Bu bize haslenmiş bir password oluşturmamızı sağlar... 
userScheme.pre('save', async function(next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

const User = new mongoose.model('user', userScheme)

module.exports = User