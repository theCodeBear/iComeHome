'use strict';

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: String,
  createdAt: { type: Date, default: Date.now, required: true }.
  facebook_id: String,
  facebook_access_token: String,
  contacts: [String],
  groups: [{ name: String, contact_ids: [String] }],
  destinations: [{ name: String, coords: {lat: String, lon: String} }]
});

module.exports = mongoose.model('User', userSchema);