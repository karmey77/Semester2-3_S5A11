if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

// 載入 express 並建構應用程式伺服器
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes') // 引用路由器
const methodOverride = require('method-override')
const port = 3000

require('./config/mongoose')

app.use(bodyParser.urlencoded({ extended: true }))
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(routes) // 將 request 導入路由器

app.use(express.static('public'))

// start and listen on the Express server
app.listen(port, () => {
    console.log(`Express is listening on localhost:${port}`)
})