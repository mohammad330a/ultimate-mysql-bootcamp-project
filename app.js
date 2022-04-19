var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extedned: true}));
app.use(express.static(__dirname + "/public"));

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'test_user',
    database: 'join_us'
});

app.get('/', function(req, res){
    var count = 0;
    var q = "SELECT COUNT(*) AS total FROM users";
    connection.query(q, function(err, results){
        if(err) throw err;
        count = results[0].total;
        console.log(results);
        //res.send("We have " + count + " users!");
        res.render("home", {data: count});
    });
});

app.post('/register', function(req, res){
    console.log("Post request recieved!");
    var person = {email: req.body.email}
    var q = "INSERT INTO users SET ?"
    connection.query(q, person, function(err, results){
        if(err) throw err;
        res.redirect('/');
    });
});

app.get('/joke', function(req, res){
    var joke = "<strong>What do you call a dog taht does magic tricks?</strong> <br>A labr...!";
    console.log("Requested a joke!");
    res.send(joke);
});

app.get('/random_num', function(req, res){
    var num = Math.floor(Math.random() * 10);
    console.log("Requested a lucky number!");
    res.send("your lucky number is (0-9): " + num);
});

app.listen(8080, function() {
    console.log('App listening on port 8080!');
});

