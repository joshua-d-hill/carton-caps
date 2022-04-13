const express = require('express');
const chai = require('chai');
const request = require('supertest');

var app = express();

describe('POST /referrals', () => {
    it('should generate a new referral with appropriate data', () => {
        request(app)
        .post('http://localhost:8080/referrals')
        .send({"id": "7","referer": "70","referee": "71","code": "TRXCLN","status": "Sent","link": "https://cartoncaps.link/abfilefa90p?referral_code=TRXCLN","method": "Email"})
        .expect(201);
    });
});

describe('GET /referrals', function() {
    it('should fetch all referrals', function(done) {
        request(app)
        .get('http://localhost:8080/referrals')
        .expect(200, done);
    });
});

describe('GET /referrals/1', function() {
    it('should fetch a single referral with an id of 1', function(done) {
        request(app)
        .get('http://localhost:8080/referrals/1')
        .expect(200, done);
    });
});