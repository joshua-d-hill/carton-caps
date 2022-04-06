'use strict';

var utils = require('../utils/writer.js');
var Referrals = require('../service/ReferralsService');

module.exports.createReferral = function createReferral (req, res, next, body) {
  Referrals.createReferral(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getReferrals = function getReferrals (req, res, next, limit, offset) {
  Referrals.getReferrals(limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
