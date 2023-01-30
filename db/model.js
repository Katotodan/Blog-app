const mongoose = require('mongoose')

const addArticleScheme = new mongoose.Schema({
    title: {type: 'string', required:true},
    description:'string',
    markdown:{type: 'string', required:true},
    createAt: {
        type: 'string',
        default: new Date().toLocaleDateString()
    },
    date: {
        type:'number',
        default: Date.now()
    },
    html:{
        type: 'string'
    }
})

const Articles = mongoose.model('ArticlesBlog', addArticleScheme);

module.exports = Articles