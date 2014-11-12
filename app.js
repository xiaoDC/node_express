var express = require('express'),
    app = express(),
    path = require('path');

var	PORT = process.env.PORT || 3000;
var PUB = __dirname + '/public',  //配置项目的一些static元素，css等
		VIEWS = __dirname + '/views'; //配置项目的 view

var site = require('./routes/index');

//设置端口号
app.set('port', PORT);   
//设置项目目录，具体指定 view 层的目录
app.set('views', VIEWS);  
//设置模板引擎
app.set('view engine', 'jade');
// app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, '/')));
// app.use(express.favicon());

app.use('/',site);
app.use('/:action',site.action);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
app.listen(PORT);
console.log('Listening on :' + PORT);