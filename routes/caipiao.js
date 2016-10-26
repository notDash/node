var express = require('express');
var router = express.Router();
var http = require('http');

/* 
GET 彩票页面 page. 

http://f.apiplus.cn/cqssc-10.json 彩票免费接口

*/
router.get('/', function(req, res, next) {
    var size = 0;
    var chunks = [];
    var data;
	http.get("http://f.apiplus.cn/cqssc-10.json", function(response) {
	  response.on('data', function(chunk){
	      size += chunk.length;
	      chunks.push(chunk);
	  });
	  response.on('end', function(){
	      data = Buffer.concat(chunks, size);
	      //console.log(data.toString())
	      
	      res.render('caipiao', { title: '彩票查询', data:JSON.parse(data.toString())});
	  });
	}).on('error', function(e) {
	  console.log("Got error: " + e.message);
	  res.render('caipiao', { title: '彩票查询', data:JSON.parse(data.toString())});
	});
    
});

module.exports = router;
