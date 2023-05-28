if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const db = require('../../config/mongoose')
const Url = require('../Url') // 載入 restaurant model
const urlSeed = [{
    shortUrl: "randomText",
    fullUrl: "https://google.com"
}, {
    shortUrl: "2sda1",
    fullUrl: "https://facebook.com"
}]

db.once('open', () => {
    urlSeed.forEach(url => {
        Url.create(url)
    });
    console.log('done')
})