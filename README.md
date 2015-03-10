# Gicon

[![Build Status](https://travis-ci.org/kenticny/Gicon.svg?branch=master)](https://travis-ci.org/kenticny/Gicon)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-green.svg?style=flat)](https://gitter.im/kenticny/Gicon?utm_source=badge)

Get the real path of favicon from website.

### Installation

    npm install gicon

### Usage

```javascript

var gicon = require("gicon");

// get favicon url
gicon.favicon("github.com", function(err, path) {
  // if err is not null, err contains error code and error message
  // path is "https://github.com/favicon.ico";
});

// get favicon file buffer
gicon.favicon("requirejs.org", function(err, path, buffer) {
  if(err) { throw err; }

  // get the favicon file buffer
  fs.writeFileSync("requirejs.org.png", buffer);

});

```

### Service

> http://gicon.lyitlove.com

### License

MIT