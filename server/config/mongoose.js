const mongoose    = require('mongoose'),
      fs          = require('fs'),
      modelsPath = __dirname + '/../models';

mongoose.connect('mongodb://localhost/nindash_db');

fs.readdirSync(modelsPath).forEach(function(file){
    if(file.indexOf('.js') > 0){
        require(modelsPath + '/' + file);
    }
});
