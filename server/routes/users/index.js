'use strict';

var db = require('../../models/users');

module.exports = {
  handler: function(request, reply) {
    db.find({}, function(err, users) {
      if (err) { return console.error(err); }
      reply(users);
    });
  }
};