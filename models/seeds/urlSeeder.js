const mongoose = require('mongoose')
const Url = require('../url') // 載入 restaurant model
const urlSeed = [{
    shortUrl: "randomText",
    fullUrl: "https://google.com"
},]
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => {
    console.log('mongodb error!')
})

db.once('open', () => {
    console.log('mongodb connected!')
    urlSeed.forEach(url => {
        Url.create(url)
    });
    console.log('done')
})