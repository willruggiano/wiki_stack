var express = require('express');
var router = express.Router();
var Page = require('../models/index.js').Page;

/* GET home page. */
router.get('/', function(req, res, next) {
	Page.find(function(err, data){
	  	res.render('index',{docs:data});
	});
});

router.get('/wiki/:page_url',function(req,res,next){
	var page_url = req.params.page_url;
	Page.findOne({url_name:page_url}, function(err, data){
		res.render('show',{page:data});
	});
})

module.exports = router;
