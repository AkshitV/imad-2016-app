var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/ui/index.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/ui/css/bootstrap.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css/bootstrap.css', 'bootstrap.css'));
});
app.get('/ui/css/bootstrap.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css/bootstrap.min.css', 'bootstrap.min.css'));
});
app.get('/ui/css/styles.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css/styles.css','styles.css'));
});
app.get('/ui/fonts/glyphicons-halflings-regular.eot', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/fonts/glyphicons-halflings-regular.eot', 'glyphicons-halflings-regular.eot'));
});

app.get('/ui/fonts/glyphicons-halflings-regular.svg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/fonts/glyphicons-halflings-regular.svg', 'glyphicons-halflings-regular.svg'));
});

app.get('/ui/fonts/glyphicons-halflings-regular.ttf', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/fonts/glyphicons-halflings-regular.ttf', 'glyphicons-halflings-regular.ttf'));
});

app.get('/ui/fonts/glyphicons-halflings-regular.woff', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/fonts/glyphicons-halflings-regular.woff', 'glyphicons-halflings-regular.woff'));
});

app.get('/ui/fonts/glyphicons-halflings-regular.woff2', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/fonts/glyphicons-halflings-regular.woff2', 'glyphicons-halflings-regular.woff2'));
});

app.get('/ui/fonts/glyphicons-halflings-regular.woff2', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/fonts/glyphicons-halflings-regular.woff2', 'glyphicons-halflings-regular.woff2'));
});

app.get('/ui/images/blog.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, '/ui/images/blog.jpg', 'blog.jpg'));
});

app.get('/ui/images/dp.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, '/ui/images/dp.jpg', 'dp.jpg'));
});

app.get('/ui/images/star-k-logo.png', function (req, res) {
  res.sendFile(path.join(__dirname, '/ui/images/star-k-logo.png', 'star-k-logo.png'));
});

app.get('/ui/images/star-k-logo.png', function (req, res) {
  res.sendFile(path.join(__dirname, '/ui/images/star-k-logo.png', 'star-k-logo.png'));
});

app.get('/ui/js/bootstrap.js', function (req, res) {
  res.sendFile(path.join(__dirname, '/ui/js/bootstrap.js', 'bootstrap.js'));
});

app.get('/ui/js/bootstrap.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, '/ui/js/bootstrap.min.js', 'bootstrap.min.js'));
});

app.get('/ui/js/jquery-2.1.4.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, '/ui/js/jquery-2.1.4.min.js', 'jquery-2.1.4.min.js'));
});

app.get('/ui/js/npm.js', function (req, res) {
  res.sendFile(path.join(__dirname, '/ui/js/npm.js', 'npm.js'));
});

app.get('/ui/js/script.js', function (req, res) {
  res.sendFile(path.join(__dirname, '/ui/js/script.js', 'script.js'));
});

app.get('/ui/js/script.js', function (req, res) {
  res.sendFile(path.join(__dirname, '/ui/js/script.js', 'script.js'));
});


app.get('/ui/menu-categories.html', function (req, res) {
  res.sendFile(path.join(__dirname, '/ui/menu-categories.html', 'menu-categories.html'));
});

app.get('/ui/single-category.html', function (req, res) {
  res.sendFile(path.join(__dirname, '/ui/single-category.html', 'single-category.html'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
