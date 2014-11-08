/* 项目默认的路由，同时也是index的路由 */
var express = require('express');
var router = express.Router();

/* home page of test. */
router.get('/', function(req, res){
	console.log('test', '请求 test index 页面');
	res.render('test/index');
});


module.exports = router;