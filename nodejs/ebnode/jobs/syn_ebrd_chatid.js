//Example POST method invocation 
var Client = require('node-rest-client').Client;
 
var client = new Client();
 
// set content-type header and data as json in args parameter 
var args = {
  data:{"chat_id":"phuonglibra_eb246810"},
  // data:{"eb_account": "do_phin","eb_pass": "phuong" },
  parameters:{"api": "app_member_gate","code": "do_login"},
  headers:{"Content-Type": "application/json"} 
};
 
client.get("http://mdev.enbac.com/_api/", args, function(data,response) {
    // parsed response body as js object 
    // console.log(data);
    // raw response 
    console.log(data);
});
