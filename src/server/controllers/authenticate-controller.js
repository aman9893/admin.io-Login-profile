var connection = require('./../config');
var jwt = require('jsonwebtoken');

module.exports.authenticate=function(req,res){
    console.log(req.body)
    var email=req.body.email;
    var password=req.body.password;

    connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
        if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }
      else{
        const token =jwt.sign({email} ,'my_secret_key');
        if(results.length >0){
            if(password==results[0].password){
                res.json({
                    status:true,
                    token:token,
                    results:results,
                    message:'successfully authenticated'
                })
            }else{
                res.json({
                  status:false,
                  message:"Email and password does not match"
                 });
            }
        }
        else{
          res.json({
              status:false,    
            message:"Email does not exits"
          });
        }
      }
    });


    
}