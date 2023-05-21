// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const Url = require('../../models/Url') // 引用 Todo model
const generateRandomText = require('./../../models/randomText')

// 定義路由
// create and post to server
router.post('/', (req, res) => {
    const fullUrl = req.body.fullUrl;

    (async () => {
        try {
            // Check if there is the same link
            const existingUrl = await Url.findOne({ fullUrl }).lean();
            if (!existingUrl) {
                // If this is a new URL
                console.log('This is a new URL');
                const shortUrl = generateRandomText(5);
                await Url.create({
                    shortUrl,
                    fullUrl,
                });

                return res.render('show', { shortUrl });
            } else {
                // If this is an existing URL
                console.log('This is an existing URL');
                return res.render('show', { shortUrl: existingUrl.shortUrl });
            }
        } catch (error) {
            console.error(error);
        }
    })();
})

// 匯出路由模組
module.exports = router