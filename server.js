var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

var app = express();

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}))
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

var port = process.env.PORT || 8080;
app.listen(port);


































// var express = require("express");
// var bodyParser = require("body-parser");

// var PORT = process.env.PORT || 8080;

// var app = express();

// app.use(express.static("public"));

// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(bodyParser.json());

// var exphbs = require("express-handlebars");


// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");


// var routes = require("./controllers/burgers_controller.js");

// app.use('/', routes);

// app.listen(PORT, function() {
//     console.log("Server listening on: https://localhost:" + PORT);
// });