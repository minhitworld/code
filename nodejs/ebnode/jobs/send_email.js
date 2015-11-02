var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var mysqllib = require('../libs/mysqldb');

mysqllib.getConnection(function(err, mclient) {
	mclient.query("SELECT * FROM tools_email_filter limit 10",function(err,rows){
		if(err){

		}else{
			for(var i in rows){
				console.log(rows[i].email);
			}
		}
	});
});


