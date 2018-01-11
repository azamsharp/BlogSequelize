const express = require('express')
const models = require('./models')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

app.engine('mustache',mustacheExpress())

app.set('views','./views')
app.set('view engine','mustache')

models.post.findOne({
  include: [
    {
      model: models.comment,
      as : 'comments'

    }
  ]
}).then(function(post){
  console.log(post.comments)
})

/*
comment.save().then(function(comment){
  console.log(comment)
})*/




app.get('/posts',function(req,res){

  // get all the posts from the database using sequelize
  models.post.findAll().then(function(posts){
    res.render('posts',{'posts':posts})
  })

})

/*
// building a post
const post = models.post.build({
  title :"Hello CSS",
  body: 'This is CSS course'
})

console.log("post before saving")
console.log(post)
*/


// inserting the post in the database
/*
post.save().then(function(newPost){
  console.log("newPost object")
  console.log(newPost)
})
*/



// find the post in the database
/*
models.post.findOne().then(function(post){
  console.log(post)
}) */


// find the post by id
/*
models.post.findById(2).then(function(post){
  console.log(post)
}) */

// find all the posts
/*
models.post.findAll().then(function(posts){
  console.log(posts)
}) */

// find the posts by username
/*
models.post.findAll({
  where: {
    username : 'johndoe'
  }
}).then(function(posts){
  console.log(posts)
}) */


// updating the post
/*

models.post.update({
  username : 'mary'
},{
  where: {
    username : 'johndoe'
  }
}).then(function(post){
  console.log(post)
}) */

app.listen(3000,function(){
  console.log("node server has started")
})
