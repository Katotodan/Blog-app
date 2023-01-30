var markdown = require( "markdown" ).markdown;
const ArticleModel = require('../db/model')

const addArticle = async(req,res)=>{
    try {
        const task = await ArticleModel.create(
            {
                title: req.body.title,
                description: req.body.description,
                markdown: req.body.markdown,
                html: markdown.toHTML(req.body.markdown)
            }
        )
        res.render('addNewArticle', {msg: 'Article added'})
    } catch (error) {
        console.log(error)
        res.render('addNewArticle', {msg:'User not added'})
    }
}

const allArticle = async (req,res) =>{
    try {
        const allTask = await ArticleModel.find({}).sort({ data: 'desc'})
        res.render('home',{allArticle: allTask})  
    } catch (error) {
        console.log(error)
    } 
}
const readMore = async(req,res) =>{
    try {
        const task = await ArticleModel.findById(req.params.id)
        res.render('readMore',{article: task})
    } catch (error) {
        console.log(error)
        res.render('readMore')
    }
}
const editArticle = async(req,res) =>{
    try {
        const task = await ArticleModel.findById(req.params.id)
        res.render('edit',{article: task,msg:""})
    } catch (error) {
        console.log(error)
        res.render('readMore', {article:"", msg:""})
    }
}
const editSub = async(req,res) =>{
    try {
        await ArticleModel.findByIdAndUpdate(
            req.params.id, 
            {
                title: req.body.title,
                description: req.body.description,
                markdown: req.body.markdown,
                html: markdown.toHTML(req.body.markdown)
            }
        )
        const task = await ArticleModel.findById(req.params.id)
        res.render('edit',{article: task, msg:'Updated successfully'})
    } catch (error) {
        res.render('readMore', {article:"", msg:'Fail'})
    }
}
const deleteArticle = async(req,res) =>{
    try {
        await ArticleModel.findByIdAndDelete(req.params.id)
        res.redirect('/')
    } catch (error) {
        console.log(error)
        res.redirect('/')
    }
}
    
module.exports = {addArticle, allArticle, readMore, editArticle, editSub, deleteArticle}