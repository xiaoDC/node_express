/* 项目默认的路由，同时也是index的路由 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var userModel = require('../schema/model/user.js');
var bcrypt = require('bcrypt');


/* home page. */
router.get('/', function(req, res) {
    console.log('index', '请求 index 页面');
    var index = "Inedx";
    var user = new userModel({
        name: "chenjing",
        password: "chenjing"
    });
    user.save(function(err) {
        if (err) {
            console.log("save error:", err);
        }
        console.log("save success");
    });

    // bcrypt.genSalt(10, function(err, salt) {
    //     if (err) next(err);
        console.log('得到的salt是：', salt);
        bcrypt.hash('chenglong', salt, function(error, encrypted) {
            if (error) next(error);
            console.log('加密后的：', encrypted);
        })
    // })

    res.render('index', {
        title: index
    });
});

router.action = function(req, res) {
    var title = req.params.action;
    var pageName = title.toLowerCase();
    console.log(title, '请求 ' + title + ' 页面');

    if (title == "list") {
        title = "Index";
        pageName = title.toLowerCase();
        userModel.find({}, function(err, users) {
            if (err) {
                console.log("find error:", err);
            }
            console.log(users);
        });
    }


    res.render(pageName, {
        title: title
    });
}

module.exports = router;
