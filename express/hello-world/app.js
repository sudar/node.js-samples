var app = require('express').createServer();

app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/:name', function(req, res){
    res.send('Hello World, ' + req.params.name);
});

app.listen(3000);
