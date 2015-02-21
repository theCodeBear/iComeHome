'use strict';

module.exports = [
  { method: 'get', path: '/{param*}', config: require('../routes/general/static') },
  { method: 'get', path: '/', config: require('../routes/general/home') },

  { method: 'get', path: '/users', config: require('../routes/users/index') },
  { method: 'post', path: '/users', config: require('../routes/users/create') }
];
