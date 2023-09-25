const express = require('express');
const app = express();
const passport = require('passport');
const passportStratergy = require('./config/passport');
const bodyParser = require('body-parser');
const port = 3000;
const router = require("./routes/router")
const db = require('./config/database');


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.use(router);
app.listen(port, (err)=>{
    if(err) {console.error(err);}
    console.log("server is running on the http://localhost:3000/");
});  