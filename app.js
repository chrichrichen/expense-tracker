const express = require('express')
const mongoose = require('mongoose')

if (process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}
const app = express()
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

app.get('/', (req,res)=>{
  res.render('login')
})

app.listen(3000,()=>{
  console.log(`App is running on http://localhost:3000`)
})