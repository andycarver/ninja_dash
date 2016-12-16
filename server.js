const express  = require( 'express' ),
      bp       = require('body-parser'),
      session  = require('express-session'),
      app      = express();

app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/bower_components'));
app.use(bp.json());
//require('./server/config/mongoose.js');
//require('./server/config/routes.js')(app);

app.listen(8000, function() {
  console.log('server running on port 8000');
});
