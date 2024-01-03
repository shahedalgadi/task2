const express = require('express');
const router = express.Router();

const PostsController = require('../controller/PostsController')
const UsersController = require('../controller/UsersController')
const ProductController = require('../controller/ProductController')

router.post('/login', UsersController.loginUsers)
router.post('/signup', UsersController.SignUpUsers)
router.get('/add-product', ProductController.addproduct)
router.get('/posts', PostsController.GetAllPosts)
router.get('/users/salarys', UsersController.GetAllUserssalarys)





module.exports = router





/*router.post('/login',(req,res)=>{
    
    res.json({
        msg : req.body,

    })
})

router.post('/registering',(req,res)=>{
    
    res.json({
        msg : req.body,

    })
})*/