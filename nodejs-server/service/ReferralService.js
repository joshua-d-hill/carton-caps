'use strict';


/**
 * Fetch a referral by id including its referee, status, link, and method
 *
 * referralId Long ID of a referral to return
 * returns referral
 **/
exports.getReferral = function(referralId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "referer" : "10",
  "code" : "XFCDOB",
  "method" : "text",
  "link" : "https://cartoncaps.link/abfilefa90p?referral_code=referral_code",
  "id" : "1",
  "referee" : "11",
  "status" : "Complete"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates a referral in system
 *
 * body Referrals_referralId_body  (optional)
 * referralId Long ID of referral to update
 * no response value expected for this operation
 **/
exports.updateReferral = function(body,referralId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

