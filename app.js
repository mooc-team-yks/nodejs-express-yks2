const app = require('express')()

//test commen 1t
app.get('/', (req, res) => {
  res.send("Hello from Appsody!");
});
 
module.exports.app = app;
