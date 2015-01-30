/* Define some initial variables. */
var applicationRoot = __dirname.replace(/\\/g,"/"),
  morgan  = require('morgan'),
  errorhandler = require('errorhandler')
  ipaddress = '0.0.0.0',
  port = 8080;
mockRoot = applicationRoot + '/test/mocks/api',
  mockFilePattern = '.json',
  mockRootPattern = mockRoot + '/**/*' + mockFilePattern,
  apiRoot = '/api',
  fs = require("fs"),
  glob = require("glob");

/* Create Express application */
var express = require("express");
var app = express();

/* Configure a simple logger and an error handler. */
app.use(morgan('combined'));
app.use(errorhandler());

/* Read the directory tree according to the pattern specified above. */
var files = glob.sync(mockRootPattern);

/* Register mappings for each file found in the directory tree. */
if(files && files.length > 0) {
  files.forEach(function(fileName) {

    var mapping = apiRoot + fileName.replace(mockRoot, '').replace(mockFilePattern,'') + '.*';

    app.get(mapping, function (req, res) {
      var data =  fs.readFileSync(fileName, 'utf8');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(data);
      res.end();
    });

    console.log('Registered mapping: %s -> %s', mapping, fileName);
  })
} else {
  console.log('No mappings found! Please check the configuration.');
}

/* Start the API mock server. */
console.log('Application root directory: [' + applicationRoot +']');
console.log('Mock Api Server listening: [http://' + ipaddress + ':' + port + ']');
app.listen(port, ipaddress);