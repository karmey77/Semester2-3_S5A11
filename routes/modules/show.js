// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const Url = require('../../models/Url') // 引用 Todo model
const generateRandomText = require('./../../models/randomText')

// 定義路由
// create and post to server
router.post('/', (req, res) => {
    const fullUrl = req.body.fullUrl
    const shortUrl = generateRandomText(5)

    return Url.create(
        {
            shortUrl: shortUrl,
            fullUrl: fullUrl
        }
    )     // 存入資料庫
    // .then((temp)=>console.log(temp))
    .then((url) => res.render('show', {shortUrl: url.shortUrl}))
    .catch(error => console.log(error))
})

// 匯出路由模組
module.exports = router