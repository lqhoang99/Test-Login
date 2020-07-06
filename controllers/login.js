
module.exports.login=function(req,res){
      res.render('login');
};
module.exports.postLogin=function(req,res){
      var email=req.body.email;
      var password=req.body.password;
      if(email !== "dev@cashbag.vn"){
            res.render('login',{
                  notices:[
                        'Wrong Email.'
                  ],
                  value:req.body
            });
            return;
      }
      if( password !== "123123")
      {
            res.render('login',{
                  notices:[
                        'Wrong password.'
                  ],
                  value:req.body
            });
            return;
      }
      res.render('login',{
            notices:[
                  'Success'
            ]
      });
};
