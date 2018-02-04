// var chai = require('chai');
// var webdriver = require('selenium-webdriver');
// //var chrome = require('selenium-webdriver/chrome');
// var path = require('chromedriver').path;

// // var service = new chrome.ServiceBuilder(path).build();
// // chrome.setDefaultService(service);

// var driver = new webdriver.Builder()
//     .withCapabilities(webdriver.Capabilities.chrome())
//     .build();


//  var chaiWebdriver = require('chai-webdriver');
//  chai.use(chaiWebdriver(driver));


// Start with a webdriver instance: 
var sw = require('selenium-webdriver');
require('chromedriver').path;
var driver = new sw.Builder()
  .withCapabilities(sw.Capabilities.chrome())
  .build()
 
// And then... 
var chai = require('chai');
var chaiWebdriver = require('chai-webdriver');
chai.use(chaiWebdriver(driver));

driver.get('http://localhost:4200');

require('zone.js');
import 'reflect-metadata';
import { Component } from "@angular/core";
import { inject } from "@angular/core/testing";

var assert = chai.assert;
var expect = chai.expect;


describe('HTML Test', () => {
    it('Testing Client Site Testing', () => {
        //expect(true).to.be.true;
        // chai.expect('#site-container h1.heading').dom.to.not.contain.text("I'm a kitty!");

       // chai.expect('h1').dom.not.to.have.text("Wake");

        chai.expect('.exists-but-hidden').dom.to.have.value('Hide mes!');//.then(function(res){
        //         console.log("dddddd " + res);
        // });
    });
});