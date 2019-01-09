let express = require('express');

let burger = require('../models/burgers');

let router = express.Router();

router.get('/', function(req, res){
    burger.selectAll(function(data){
        let hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', function(req, res){
    console.log(req.body);
burger.insertOne([
    'burger_name'
],[
    req.body.burger_name
],
    function(data){
        res.redirect("/");
    });

});

router.put('/api/burgers/:id', function(req, res){
    let condition = `id = ${req.params.id}`;
    burger.updateOne({
        devoured: true
    }, condition, function(data){
        res.end();
    });
});

module.exports = router;