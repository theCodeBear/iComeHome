'use strict';

var User = require('../../models/users');

module.exports = {
  handler: function(request, reply) {
    var user = new User(request.payload);
    user.save(function(err, data) {
      if (err) { return console.error(err); }
      reply();
    });
  }
};