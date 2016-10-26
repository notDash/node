var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req);

  var data = [
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Jordan Walke", text: "This is *another* comment"},
    {author: "Jordan Walke2", text: "This is *another* comment2"},
    {author: "Jordan Walke3", text: "This is *another* comment3"},
    {author: "Jordan Walke4", text: "This is *another* comment4"},
    {author: "Jordan Walke5", text: "This is *another* comment5"}
  ];
  if(!(req.method === "GET")) {
    data.push({author: "Jordan Walke6", text: "This is *another* comment6"});
  }
  res.send(data);
});

module.exports = router;
