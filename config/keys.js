//keys.js - figure out what set of credentials to return

if(process.env.NODE_ENV === 'production') {
  // we are in production - return the prod set of keys
  module.exports = require('./prod');
} else {
  //we are in development - return the dev keys
 module.exports = require('./dev');
}

//prod
//password = 2nQR4TY5i2euhVTu
//mongouri= mongodb+srv://georgevallencia:2nQR4TY5i2euhVTu@cluster3.54zqx.mongodb.net/blogg2?retryWrites=true&w=majority&appName=Cluster3