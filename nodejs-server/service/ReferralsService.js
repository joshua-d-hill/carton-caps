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
    examples['application/json'] = [ {
  "name" : "textSent",
  "id" : "1",
  "referer" : "10",
  "referee" : "11",
  "code" : "XFCDOB",
  "link" : "https://cartoncaps.link/abfilefa90p?referral_code=XFCDOB",
  "method" : "text",
  "status" : "Sent"
}, {
  "name" : "emailReceived",
  "id" : "2",
  "referer" : "10",
  "referee" : "21",
  "code" : "XFCDOB",
  "link" : "https://cartoncaps.link/abfilefa90p?referral_code=XFCDOB",
  "status" : "Received",
  "method" : "Email"
}, {
  "name" : "shareComplete",
  "id" : "3",
  "referer" : "30",
  "referee" : "31",
  "code" : "MRKCVW",
  "link" : "https://cartoncaps.link/abfilefa90p?referral_code=MRKCVW",
  "status" : "Complete",
  "method" : "Share"
}, {
  "name" : "textReceived",
  "id" : "4",
  "referer" : "40",
  "referee" : "41",
  "code" : "LJEODN",
  "link" : "https://cartoncaps.link/abfilefa90p?referral_code=LJEODN",
  "status" : "Received",
  "method" : "Text"
}, {
  "name" : "emailComplete",
  "id" : "5",
  "referer" : "50",
  "referee" : "51",
  "code" : "YGFVHG",
  "link" : "https://cartoncaps.link/abfilefa90p?referral_code=YGFVHG",
  "status" : "Complete",
  "method" : "Email"
}, {
  "name" : "shareSent",
  "id" : "6",
  "referer" : "60",
  "referee" : "61",
  "code" : "WNQLRP",
  "link" : "https://cartoncaps.link/abfilefa90p?referral_code=WNQLRP",
  "status" : "Sent",
  "method" : "Share"
} ];
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
    examples['application/json'] = [ [ {
  "name" : "textSent",
  "id" : "1",
  "referer" : "10",
  "referee" : "11",
  "code" : "XFCDOB",
  "link" : "https://cartoncaps.link/abfilefa90p?referral_code=XFCDOB",
  "method" : "text",
  "status" : "Sent"
}, {
  "name" : "emailReceived",
  "id" : "2",
  "referer" : "10",
  "referee" : "21",
  "code" : "XFCDOB",
  "link" : "https://cartoncaps.link/abfilefa90p?referral_code=XFCDOB",
  "status" : "Received",
  "method" : "Email"
}, {
  "name" : "shareComplete",
  "id" : "3",
  "referer" : "30",
  "referee" : "31",
  "code" : "MRKCVW",
  "link" : "https://cartoncaps.link/abfilefa90p?referral_code=MRKCVW",
  "status" : "Complete",
  "method" : "Share"
}, {
  "name" : "textReceived",
  "id" : "4",
  "referer" : "40",
  "referee" : "41",
  "code" : "LJEODN",
  "link" : "https://cartoncaps.link/abfilefa90p?referral_code=LJEODN",
  "status" : "Received",
  "method" : "Text"
}, {
  "name" : "emailComplete",
  "id" : "5",
  "referer" : "50",
  "referee" : "51",
  "code" : "YGFVHG",
  "link" : "https://cartoncaps.link/abfilefa90p?referral_code=YGFVHG",
  "status" : "Complete",
  "method" : "Email"
}, {
  "name" : "shareSent",
  "id" : "6",
  "referer" : "60",
  "referee" : "61",
  "code" : "WNQLRP",
  "link" : "https://cartoncaps.link/abfilefa90p?referral_code=WNQLRP",
  "status" : "Sent",
  "method" : "Share"
} ], [ {
  "name" : "textSent",
  "id" : "1",
  "referer" : "10",
  "referee" : "11",
  "code" : "XFCDOB",
  "link" : "https://cartoncaps.link/abfilefa90p?referral_code=XFCDOB",
  "method" : "text",
  "status" : "Sent"
}, {
  "name" : "emailReceived",
  "id" : "2",
  "referer" : "10",
  "referee" : "21",
  "code" : "XFCDOB",
  "link" : "https://cartoncaps.link/abfilefa90p?referral_code=XFCDOB",
  "status" : "Received",
  "method" : "Email"
}, {
  "name" : "shareComplete",
  "id" : "3",
  "referer" : "30",
  "referee" : "31",
  "code" : "MRKCVW",
  "link" : "https://cartoncaps.link/abfilefa90p?referral_code=MRKCVW",
  "status" : "Complete",
  "method" : "Share"
}, {
  "name" : "textReceived",
  "id" : "4",
  "referer" : "40",
  "referee" : "41",
  "code" : "LJEODN",
  "link" : "https://cartoncaps.link/abfilefa90p?referral_code=LJEODN",
  "status" : "Received",
  "method" : "Text"
}, {
  "name" : "emailComplete",
  "id" : "5",
  "referer" : "50",
  "referee" : "51",
  "code" : "YGFVHG",
  "link" : "https://cartoncaps.link/abfilefa90p?referral_code=YGFVHG",
  "status" : "Complete",
  "method" : "Email"
}, {
  "name" : "shareSent",
  "id" : "6",
  "referer" : "60",
  "referee" : "61",
  "code" : "WNQLRP",
  "link" : "https://cartoncaps.link/abfilefa90p?referral_code=WNQLRP",
  "status" : "Sent",
  "method" : "Share"
} ] ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

