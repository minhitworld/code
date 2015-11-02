var schedule = require('node-schedule');
var rule = new schedule.RecurrenceRule();
rule.second = new schedule.Range(0, 59, 5);
schedule.scheduleJob(rule, function(){
    console.log(new Date(),'The 5th second of the minute.');
});