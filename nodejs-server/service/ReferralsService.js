'use strict';


/**
 * Generate a new referral
 *
 * body Referral 
 * returns referral
 **/
exports.createReferral = function(body) {
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
 * List all referrals
 *
 * limit Integer Limits the number of referrals per page (optional)
 * offset Integer Specify the page number of the referral to be displayed (optional)
 * returns List
 **/
exports.getReferrals = function(limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "referer" : "10",
  "code" : "XFCDOB",
  "method" : "text",
  "link" : "https://cartoncaps.link/abfilefa90p?referral_code=referral_code",
  "id" : "1",
  "referee" : "11",
  "status" : "Complete"
}, {
  "referer" : "10",
  "code" : "XFCDOB",
  "method" : "text",
  "link" : "https://cartoncaps.link/abfilefa90p?referral_code=referral_code",
  "id" : "1",
  "referee" : "11",
  "status" : "Complete"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

