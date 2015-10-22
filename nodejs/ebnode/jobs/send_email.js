var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var mysqllib = require('../libs/mysqldb');

/*mysqllib.getConnection(function(err, mclient) {
	mclient.query("SELECT * FROM app_email_filter limit 10",function(err,rows){
		if(err){

		}else{
			for(var i in rows){
				console.log(rows[i].email);
			}
		}
	});
});*/
var transporter = nodemailer.createTransport(smtpTransport({
    host: 'smtp.xone.vn',
    port: 587,
    auth: {
        user: 'support@enbac.com',
        pass: 'CtM3273weuBupGX0opebvMxL6I3cTXAPjKswuwUbDSQz'
    }
}));

var mailoption = {
	from: 'noreply@enbac.com',
	to: 'kiemtrahethong1@gmail.com',
	subject: 'Lời mời dùng app từ enbac.com',
	text: 'Mời bạn dùng ứng dụng enbac.com'
};

transporter.sendMail(mailoption,function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }

    // if you don't want to use this transport object anymore, uncomment following line
    //smtpTransport.close(); // shut down the connection pool, no more messages
});


