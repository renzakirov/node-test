const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config');
const posts = require('./posts')

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    posts,
  });
});

app.get('/post/:id', (req, res) => {
  console.log('req.params.id = ', req.params.id);
  const post = posts.find(p => p.id == req.params.id);
  if (post) {
    res.render('post', {
      author: post.author,
      title: post.title,
      body: post.body,
    });
  }
});


module.exports = app;