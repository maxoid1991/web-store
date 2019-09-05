var express = require('express');
var app = express();
const path = require('path');

//Static folder: Frontend app;
app.use(express.static(path.join(__dirname, '../frontend/dist')));
app.use('/assets', express.static('assets'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});