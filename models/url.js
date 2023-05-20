const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema({
    shortUrl: {
        type: String,
        require: true
    },
    fullUrl: {
        type: String, // 資料型別是網址
        required: true // 這是個必填欄位
    }
})

module.exports = mongoose.model('Url', urlSchema)