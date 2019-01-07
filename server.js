var express = require('express');
let exphbs = require("express-handlebars");
var app = express();
let PORT = 8080 || process.env.PORT;

require('./config/connection');

let routes = require('./controllers/burgers_controller');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get("/", routes);

app.listen(PORT, ()=>{
    console.log("Listening on: "+PORT);
});