const mongoose = require('mongoose')
const Schema = mongoose.Schema
const expenseSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  category:{
    type: String,
    require: true
  },
  date:{
    type: Date,
    required: true
  },
  amount:{
    type: Number,
    require: true
  },
  userId:{
    type: Schema.Types.ObjectID,
    ref: 'User',
    index: true,
    required: true
  }
}) 