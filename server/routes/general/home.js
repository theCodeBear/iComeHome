'use strict';

module.exports = {
  handler: function(request, reply) {
    // reply("Hello iComeHome world");
    reply.view('templates/general/home');
  }
};
