var assert = require('chai').assert,
		expect = require('chai').expect,
		dataPeople = require('../data/people')(),
		site = require('../data/siteData')();


describe('Data People', function () {
	'use strict';

	it('should be an object', function (done) {
		assert.isObject(dataPeople, 'true');
		done();
	});

	it('should have a names property', function (done) {
		expect(dataPeople).to.have.property('names');
		done();
	});

	it('should have titles property', function (done) {
		expect(dataPeople).to.have.property('titles');
		done();
	});

	it('should have bios property', function (done) {
		expect(dataPeople).to.have.property('bios');
		done();
	}); 

});

describe('Data Site', function () {
	'use strict';
	
	it('should be an object', function (done) {
		assert.isObject(site, 'true');
		done();
	});

	it('should have the property title', function (done) {
		expect(site).to.have.property('title');
		done();
	});

	it('should have the property heading', function (done) {
		expect(site).to.have.property('heading');
		done();
	});

	it('should have the property nav, and it should be an array', function (done) {
		expect(site).to.have.property('nav');
		assert.isArray(site.nav, 'nav is an array');
		done();
	});

	it('should have the property for enviorment', function (done) {
		expect(site).to.have.property('env');
		done();
	});

	it('should have the property page', function (done) {
		expect(site).to.have.property('page');
		done();
	});
});
