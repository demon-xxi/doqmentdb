'use strict';
// This file it's kind of draft to the new Design of what I'm gonna
// refactor this project, cuz I really don't like current
var DoQmentDB = require('./');
// Connection + db usage
var CONFIG = require('../../config');
var dbConnection = new (require('documentdb').DocumentClient)(CONFIG.HOST, CONFIG.OPTIONS);
var db = new DoQmentDB(dbConnection, 'compliance-proxy');
//
//// Collection + query docs
var users = db.use('ips_white_list'); //get or use
////users.get()
////  .then(console.log);
users.getAll()
  .then(console.log)

//db.getCollectionByName('users')
//.then(console.log)