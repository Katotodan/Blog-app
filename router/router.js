const express = require('express')
const {
    addArticle, 
    allArticle, 
    readMore,
    editArticle, 
    editSub,
    deleteArticle
} = require('../controller/controller')

const router = express.Router()

router.route('/').get(allArticle)
router.route('/addNewArticle').post(addArticle)
router.route('/readMore/:id').get(readMore)
router.route('/edit/:id').get(editArticle)
router.route('/submitEdit/:id').post(editSub)
router.route('/delete/:id').delete(deleteArticle)

module.exports = router