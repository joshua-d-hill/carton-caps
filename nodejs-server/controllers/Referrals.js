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

module.exports.getReferral = function getReferral (req, res, next, referralId) {
  Referrals.getReferral(referralId)
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

module.exports.updateReferral = function updateReferral (req, res, next, body, referralId) {
  Referrals.updateReferral(body, referralId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
