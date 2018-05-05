var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var stringfyFile;
app.use(bodyParser.json());


//Readfile
app.get('/getNote', function(req,res){
    fs.readFile(path.resolve(__dirname, './test.json'), 'utf-8', function (err,data) {
        if(err) throw err;
        stringfyFile = data;
        res.send(stringfyFile);
    })
});

//Writefile
app.post('/updateNote/:note', function(req,res) {
    fs.writeFile(path.resolve(__dirname, './test.json'), req.params.note, function(err) {
        if(err) throw err;
    });
});
app.listen(3000);