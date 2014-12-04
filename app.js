var express  = require('express'),
app          = express(),
path         = require('path'),
favicon      = require('serve-favicon');
var mongoose = require('mongoose');
var config   = require('./schema/config.js');
var bcrypt   = require('bcrypt');
global.db    = mongoose.connect(config.mongodb);

bcrypt.genSalt(10, function(err, salt){
	if(err) next(err);
	global.salt = salt;
	console.log('得到的salt是：', salt);
	bcrypt.hash('chenglong', salt, function(error, encrypted){
		if(error) next(error);
		console.log('加密后的：', encrypted);
	})
})

var	PORT = process.env.PORT || 3000;
var PUB  = __dirname + '/public',  //配置项目的一些static元素，css等
VIEWS    = __dirname + '/views'; //配置项目的 view

var site = require('./routes/index');


// 连接mongodb数据库


//设置端口号
app.set('port', PORT);   
//设置项目目录，具体指定 view 层的目录
app.set('views', VIEWS);  
//设置模板引擎
app.set('view engine', 'jade');
// app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, '/')));
// 设置页面的icon
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

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