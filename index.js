var express = require('express');
var app = express();
var cors = require('cors');
var dal = require('./dal.js');

//used to serve static files from public directory
app.use(express.static('public'));
app.use(cors());

// create account
app.get('/account/create/:name/:email/:password/:id', function(req, res) {
    // else create user
    dal.find(req.params.email).
        then((users)=>{
            // if user exists, return error message
            console.log(users);
            if(users.length > 0){
                console.log('User already in exists');
                res.send('User already in exists');
            }
            else{
                // else create user
                dal.create(req.params.name,req.params.email,req.params.password,req.params.id).
                    then((user) => {
                        console.log(user);
                        res.send(user);            
                    });            
            }
        });
});

//balance
app.get('/account/all/:email', function(req, res){
    dal.find(req.params.email).
        then((docs) => {
            res.send(docs[0]);
    });
})

// login user 
app.get('/account/login/:email/:password', function (req, res) {

    dal.find(req.params.email).
        then((user) => {

            // if user exists, check password
            if(user.length > 0){
                if (user[0].password === req.params.password){
                    res.send(user[0]);
                }
                else{
                    res.send('Login failed: wrong password');
                }
            }
            else{
                res.send('Login failed: user not found');
            }
    });
    
});

// update - deposit amount
app.get('/account/deposit/:email/:amount', function (req, res) {

    var amount = Number(req.params.amount);

    dal.update(req.params.email, amount).
        then((response) => {
            console.log(response);
            res.send(response);
    });    
});

// update - withdraw amount
app.get('/account/withdraw/:email/:amount', function (req, res) {

    var amount = -Number(req.params.amount);

    dal.update(req.params.email, amount).
        then((response) => {
            console.log(response);
            res.send(response);
    });    
});

// all accounts
app.get('/account/all', function (req, res) {

    dal.all().
        then((docs) => {
            console.log(docs);
            res.send(docs);
    });
});




var port = 3000;
app.listen(port);
console.log("Running on port: " + port);