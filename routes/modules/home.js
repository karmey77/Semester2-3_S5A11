// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const Url = require('../../models/Url') // 引用 Todo model

// 定義首頁路由
// index
router.get('/', (req, res) => {
    res.render('index')
})

// redirect
router.get('/:shortUrl', (req, res) =>{
    const shortUrl = req.params.shortUrl
    return Url.find()
        .lean()
        .then((urls) => urls.filter(url => url.shortUrl.toString() === shortUrl))
        .then((url) => url[0])
        .then((url) => res.redirect(url.fullUrl))
        .catch(error => console.log(error))
})

// 匯出路由模組
module.exports = router