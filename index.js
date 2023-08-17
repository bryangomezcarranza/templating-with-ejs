const express = require('express');
const app = express();
const port = 3000;

app.set("view engine", "ejs");

var data = require('./data/test.json');
//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
  let title = "Home";
  res.render("pages/home", { "title": title });
  //res.send('Home Page');
});

app.get('/about', (req, res) => {
  let title = "About Page";
  res.render("pages/about", { "title": title });
  //res.send('Home Page');
});

app.get('/contact', (req, res) => {
  let title = "Contact";
  res.render("pages/contact", { "title": title });
  //res.send('Home Page');
});

app.get('/projects', (req, res) => {
  let title = "Projects";
  res.render("pages/projects", { "title": title });
  //res.send('Home Page');
});


//users index is our list page
app.get('/users', function(req, res) {
	var title = 'Users Page';
	res.render('users/index', {
    	title: title,
    	users: data
	});
});

//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 res.render('users/view', {
     title: title,
     user: data[--id]
 });
});



app.listen(port, () => {
  console.log(`Example app listening on port 
  ${port}`);
  console.log(data);
});
