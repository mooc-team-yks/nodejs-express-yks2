const app = require('express')()

//test comment
app.get('/', (req, res) => {
  res.send("Hello from Appsody!");
});
 
module.exports.app = app;
