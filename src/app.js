const express = require('express');
const path = require('path');
const app = express();

var nodeModulesDir = path.join(__dirname, '../node_modules');
app.use('/node_modules/', express.static(nodeModulesDir));

var srcDir = path.join(__dirname, '../src');
app.use(express.static(srcDir));

app.get("/", function (req, res) {
  res.sendFile(srcDir + "/index.html");
});

app.listen(3000, function () {
  console.log("Server is running on localhost3000");
});