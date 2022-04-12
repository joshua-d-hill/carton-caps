'use strict';

var utils = require('../utils/writer.js');
var Referral = require('../service/ReferralService');

module.exports.getReferral = function getReferral (req, res, next, referralId) {
  Referral.getReferral(referralId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateReferral = function updateReferral (req, res, next, body, referralId) {
  Referral.updateReferral(body, referralId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
