# Gicon
Get the real path of favicon from website.

### Installation

    npm install gicon

### Usage

```javascript

var gicon = require("gicon");

gicon.favicon("github.com", function(err, path) {
  // if err is not null, err contains error code and error message
  // path is "https://github.com/favicon.ico";
});

gicon.favicon("requirejs.org", function(err, path) {
  // path is "http://requirejs.org/favicon.png"
});

```

### Service

> http://gicon.lyitlove.com

### License

MIT