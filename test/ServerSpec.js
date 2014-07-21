describe('Server', function () {
	'use strict';
	
	var should = require('chai').should(),
			supertest = require('supertest'),
			app = require('./app.js');

	it('should get index page', function (done) {
		supertest(app)
		.get('/')
		.expect(200)
		.end(function (err, res) {
			res.status.should.equal(200);
			done();
		});
	});

	it('should get info page', function (done) {
		supertest(app)
		.get('/info')
		.expect(200)
		.end(function (err, res) {
			res.status.should.equal(200);
			done();
		});
	});

});