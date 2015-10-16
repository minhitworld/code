var mysqllib = require('../libs/mysqldb');

mysqllib.getConnection(function(err, mclient) {
	mclient.query("SELECT * FROM account limit 10",function(err,rows){
		if(err){

		}else{
				
			for(var i in rows){
				console.log(rows[i].email);
			}
		}
	});
});
