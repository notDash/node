var express = require('express');
var router = express.Router();


/*node子程序 执行命令*/
var child_process = require('child_process');
var iconv = require('iconv-lite');
var encoding = 'cp936';
var binaryEncoding = 'binary';
/*node子程序 执行命令*/



/* GET home page. */
router.get('/', function(req, res, next) {
/*
    var gitlab = require('gitlab')({
        url:'https://gitlab.com',
        tolen:'iKwwrxJk9FWMK_yWrS3C'
    });
    // Listing users
    gitlab.users.all(function(users) {
      for (var i = 0; i < users.length; i++) {
        console.log("#" + users[i].id + ": " + users[i].email + ", " + users[i].name + ", " + users[i].created_at);
      }
    });

    // Listing projects
    gitlab.projects.all(function(projects) {
      for (var i = 0; i < projects.length; i++) {
        console.log("#" + projects[i].id + ": " + projects[i].name + ", path: " + projects[i].path + ", default_branch: " + projects[i].default_branch + ", private: " + projects[i]["private"] + ", owner: " + projects[i].owner.name + " (" + projects[i].owner.email + "), date: " + projects[i].created_at);
      }
    });
*/

child_process.exec('svn log', { encoding: binaryEncoding }, function(err, stdout, stderr){
    console.log(iconv.decode(new Buffer(stdout, binaryEncoding), encoding), iconv.decode(new Buffer(stderr, binaryEncoding), encoding));
});


  res.render('index', { title: '页面构建平台' });
});

module.exports = router;
