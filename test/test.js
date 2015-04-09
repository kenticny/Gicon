// var assert = require("assert");
var fs = require("fs");
var gicon = require("../index");

describe("GetPath", function() {
  this.timeout(10000);

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

  it("get the favicon file buffer", function(done) {
    gicon.favicon("github.com", function(err, path, buffer) {
      if(err) { throw err; }
      // fs.writeFileSync("github.com.png", buffer);
      done();
    });
  });

});

  