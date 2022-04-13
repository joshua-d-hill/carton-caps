const express = require('express');
const chai = require('chai');
const request = require('supertest');

var app = express();

describe('POST /referrals', () => {
    it('should generate a new referral with appropriate data', () => {
        request(app)
        .post('/referrals')
        .send({"id": "7","referer": "70","referee": "71","code": "TRXCLN","status": "Sent","link": "https://cartoncaps.link/abfilefa90p?referral_code=TRXCLN","method": "Email"})
         expect(201, done);
    });
});

describe('GET /referrals', function() {
    it('should fetch all referrals', function(done) {
        request(app)
        .get('/referrals')
        .expect(200, done);
    });
});
