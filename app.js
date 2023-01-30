const express = require('express')
const connectDb = require('./db/connect')
const router = require('./router/router')
let methodOverride = require('method-override')
const app = express()
const port = 5000

// Set EJS as templating engine 
app.set('view engine', 'ejs'); 
app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/', router)

app.get('/addNewBlog', (req,res) =>{
    res.render('addNewArticle',{msg:''})
})

const start = async() =>{
    await connectDb()
    app.listen(port, console.log('Server connected on port' + port + '....'))
}
start()