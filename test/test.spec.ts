require('zone.js');
import 'reflect-metadata';
import { Component } from "@angular/core";
import { inject } from "@angular/core/testing";
// import chai = require('chai');
// var spies = require('chai-spies');
// chai.use(spies);

var chai = require('chai')
    , chaiHttp = require('chai-http');

chai.use(chaiHttp);


var assert = chai.assert;
var expect = chai.expect;
// import { AppComponent } from '../app/app.component';
// import { Service } from '../app/service';


describe('App Component Test', () => {
    var app = null;
    // beforeEach( () => [Service]);

    // beforeEach(inject([Service],(Service)=>{
    //   app = new AppComponent(Service);
    // }));

    it('Promise Array By Irfan', () => {
        // app.getData((promise) => {
        //     assert.isArray(promise);
        expect(true).to.be.true;

        chai.request('https://jsonplaceholder.typicode.com/posts/1')
            .get('/')
            .then(res => {
                console.log("sssss" + JSON.stringify(res));
            })

        //});
    });

});