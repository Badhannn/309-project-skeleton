var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ArticleSchema = {

name:{
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title required'
  },

  description: {
    type: String,
    default: '',
    trim: true,
    required: 'price required'

  },
  
  price: {
    type: String,
    trim: true,
    required: 'Price required'
},

Quantity: {
    type: String,
    default: '',
    trim: true,
    required: 'Quantity required'
},
    
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  },
  
  
}

var Article = mongoose.model('Article', ArticleSchema, 'articles');
module.exports = Article;
