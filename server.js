import express from 'express'
const app = express()
import mongoose from 'mongoose'
mongoose.connect("mongodb://localhost:27017/test")

import bodyParser from 'body-parser'

import router from './src/routers'

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.use('/api', router)

app.listen(4000, () => {
  console.log('Running the Shopping API server at localhost:4000')
})

export default app
