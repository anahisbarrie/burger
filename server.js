var express = require('express');
var methodOverride = require('method-override');

// body-parser is a piece of express middleware that reads a form's input and stores it as a javascript object accessible through req.body
var bodyParser = require('body-parser');

// Require to use templating using handlebars
var exphbs = require("express-handlebars");

// open server
var PORT = process.env.PORT || 3000;

var app = express();

//Serve content from "public" directory. 
app.use(express.static(__dirname + '/public'));

//parse or analize application from x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

//handlebars 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var router=require('./controllers/burger_controller.js');
app.use('/', router)

app.listen(PORT, function(){
console.log("App listening on PORT" + PORT);
});



