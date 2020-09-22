const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create schema
const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
})

//create user model
const Post = mongoose.model('Post', postSchema)
module.exports = Post
