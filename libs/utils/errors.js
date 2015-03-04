var errors = {
  REQUEST_ERROR: function(err) {
    return {code: 1001, msg: "Request Error: " + err };
  },
  MISSING_PARAMS: function() {
    return {code: 1002, msg: "Missing Parameter" };
  },
  CANNOT_GET_ICON: function() {
    return {code: 1003, msg: "Cannot get current favicon" };
  },
  DOMAIN_CANNOT_NULL: function() {
    return {code: 1004, msg: "Domain cannot null" };
  }
};

module.exports = errors;