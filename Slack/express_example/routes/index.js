var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
var app = express();

app.get('/', function(req, res){
    res.send("Hello world!");
});

app.listen(3000);
console.log("Hi");
module.exports = router;
