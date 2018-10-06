var connection = require('./../config');
module.exports.register=function(req,res){
    var today = new Date();
    var users={
        "name":req.body.name,
        "email":req.body.email,
        "password":req.body.password,
        "phone":req.body.phone,
        "profile":req.body.profile,
        "created_at":today,
        "updated_at":today
    }
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            fields:fields,
            message:'user registered sucessfully'
        })
      }
    });
}

module.exports.userlistData=function(req,res){
  connection.query('select * from users', (err,result) => {
    if(err) throw err;
    console.log("hoo")
    console.log(result)
    res.end(JSON.stringify(result));
    
  })

}
