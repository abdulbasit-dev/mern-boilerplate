const express = require('express')
const Post = require('../models/post')
const router = express.Router()

//get all posts
router.get('/', (req, resp) => {
  Post.find().then(data => resp.send(data))
})

//get single post
router.get('/:id', (req, resp) => {
  Post.findById(req.params.id).then(data => resp.send(data))
})

//delete single post
router.delete('/:id', (req, resp) => {
  Post.findByIdAndDelete(req.params.id).then(data => resp.send('post deleted'))
})

//update single post
router.post('/:id', (req, resp) => {
  Post.findById(req.params.id).then(post => {
    post.title = req.body.title
    post.description = req.body.description
    post.gategory = req.body.category
    post
      .save()
      .then(data => resp.json('post updated'))
      .catch(err => console.log(err))
  })
})

//create new post
router.post('/', (req, resp) => {
  const post = new Post(req.body)
  post.save().then(() => resp.send('post created'))
})

module.exports = router
