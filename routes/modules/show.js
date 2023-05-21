// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const Url = require('../../models/Url') // 引用 Todo model
const generateRandomText = require('./../../models/randomText')

// 定義路由
// create and post to server
router.post('/', (req, res) => {
    const fullUrl = req.body.fullUrl

    // Check if there is the same link
    // If this is new one
    if (!Url.find()
        .lean()
        .then((urls) => urls.some(url => url.fullUrl === fullUrl))) {
        const shortUrl = generateRandomText(5)

        return Url.create(
            {
                shortUrl: shortUrl,
                fullUrl: fullUrl
            }
        )     // 存入資料庫
            .then((url) => res.render('show', { shortUrl: url.shortUrl }))
            .catch(error => console.log(error))
    } else { // If this is existed one
        return Url.find()
            .lean()
            // return the generated Url
            .then((urls) => urls.filter(url => url.fullUrl.toString() === fullUrl)) 
            .then((url) => url[0])
            .then((url) => res.render('show', { shortUrl: url.shortUrl }))
            .catch(error => console.log(error))
    }
})

// 匯出路由模組
module.exports = router