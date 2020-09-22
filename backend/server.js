const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const postsRouter = require('./routes/postsRouter.js')

//express app
const app = express()
const port = process.env.PORT || 5000

//connect to mongoDB
mongoose.connect(
  process.env.DB_CONNECTION,
  {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true},
  () => {
    console.log('connected')
  }
)

//middleware
app.use(express.json())

//listen for request
app.listen(port, () => console.log(`server running on port :${port}`))

// routes
app.get('/', (req, resp) => {
  resp.send('Hello World')
})

app.use('/posts', postsRouter)
