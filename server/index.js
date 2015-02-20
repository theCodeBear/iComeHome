var Hapi = require('hapi');
var routes = require('./config/routes');
var plugins = require('./config/plugins');
var views = require('./config/views');
var mongoose = require('mongoose');

var server = new Hapi.Server();

mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.on('open', function(callback) {
  server.connection({ port: process.env.PORT});
  server.route(routes);
  server.views(views);
  server.register(plugins, function(err) { if (err) throw err});
  server.start(function() {
    console.log('Server running at: ', server.info.uri);
    console.log('info', process.env.MONGO_URL);
  });
});