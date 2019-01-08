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
    
burger.insertOne([
    'burger_name'
],[
    "test" //Hard coded name of burger.  Just need to find req.body
],
    function(data){
        res.json({id: data.id});
        res.redirect('/')
    });

});

router.put('/api/burgers/:id', function(req, res){
    let condition = `id = ${req.params.id}`;

    burger.updateOne({
        devoured: true
    }, condition, function(data){
        res.redirect('/')
    });
});

module.exports = router;