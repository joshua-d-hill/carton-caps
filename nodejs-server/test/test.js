const express = require('express');
const chai = require('chai');
const request = require('supertest');

describe('POST Create new referral', () => {
    it('should generate a new referral with appropriate data', () => {
        request(app)
        .post('')
        .send({})
        .expect(201)
        .then((res) => {
         expect(res.headers.location).to.be.eql('referral');
         // additional validations as required
    });
 });
});
