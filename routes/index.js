var express = require('express');
var router = express.Router();



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
  res.render('index', { title: '页面构建平台' });
});

module.exports = router;
