var express=require('express');
var controller=require('../controllers/login');
var router=express.Router();

router.get('/',controller.login);

router.post('/',controller.postLogin);
module.exports=router;