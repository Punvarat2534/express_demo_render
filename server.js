
var express = require('express');  
var app = express();  
const port = 3001;
const createError = require("http-errors");
const router = express.Router();
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");
const path = require('path');
const cors = require('cors');

var bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const RateLimit = require("express-rate-limit");
const limiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 20,
});


app.use(cors({ origin: "http://localhost:3000" }));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); //หรือใส่แค่เฉพาะ domain ที่ต้องการได้
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});



app.use(logger("dev"));
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "script-src": ["'self'", "code.jquery.com", "cdn.jsdelivr.net"],
    },
  }),
);

app.use(limiter);


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

var autoRoutes = require('express-auto-routes')(app); 
autoRoutes(path.join(__dirname, './routes')); 

var trdRouter = require('./routes/api/trd');
app.use('/trd/', trdRouter);

app.get('/', function (req, res) {  
  res.send('Welcome to JavaTpoint!');  
});  


app.get('/', function (req, res) {  
    res.send('Welcome to Express!');  
});  

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


module.exports = app;