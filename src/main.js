//import
const express = require('express');
const path = require('path')
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const route = require('./routes');

//static file
//app.use(express.static('./src/public'));
app.use(express.static('./src/public'));

//middleware để xử lý dữ liệu từ form submit lên cho mình
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());



//HTTP logger
app.use(morgan('combined'))

//Template engine, rendering engine setup
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
//app.set('view', path.join(__dirname, 'resources', 'views'))
app.set('views', './src/resources/views')

//routes init
route(app);

app.get('/', function (req, res) {
  res.render('home');
});



// app.get('/bong-da', function (req, res) {
//   res.render('bong da');
// });

app.get('/search-hoangdinh', function (req, res) {
  res.render('searchhh');
});

app.post('/search-hoangdinh', function (req, res) {
  console.log(req.body.gender);
  res.send('');
});



app.listen(3000)