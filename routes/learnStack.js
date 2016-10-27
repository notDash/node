var express = require('express');

var router = express.Router();

/* 
GET learn statck page. 

*/

router.get('/', function (req, res, next) {
	// 调用app.js里指定路径下的jade 模板
	res.render('learnStack', {title: '学习栈'});
});

module.exports = router;




