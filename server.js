const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/message', function(req,res){

    console.log(req.get.headers);
    req.header({
        "custom-header": "Nuestro valor personalizado"
    });
    res.send('This message is geted');
})

router.delete('/message', function(req,res){


    console.log(req.body);
    console.log(req.query);

    res.send('This message is deleted' + req.body.text);


})

app.listen(3000)
