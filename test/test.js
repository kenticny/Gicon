// var assert = require("assert");

var gicon = require("../index");

describe("GetPath", function() {
  this.timeout(5000);

  it("get the favicon.ico", function(done) {
    gicon.favicon("www.baidu.com", function(err, path) {
      if(err) { throw err; }
      done();
    });
  });

  it("get the other type favicon from website", function(done) {
    gicon.favicon("requirejs.org", function(err, path) {
      if(err) { throw err; }
      done();
    });
  });
});

