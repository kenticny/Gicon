var request = require("request");

module.exports = function(options, callback) {
  options.headers = options.headers || {};
  options.headers["User-Agent"] = "Chrome/40.0.2214.111";
  request(options, callback);
};

module.exports.get = function(url, options, callback) {
  options.headers = options.headers || {};
  options.headers["User-Agent"] = "Chrome/40.0.2214.111";
  request.get(url, options, callback);
};