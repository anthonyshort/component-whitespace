var whitespace = require('css-whitespace');
var path = require('path');
var fs = require('fs');

module.exports = function(builder) {
  builder.hook('before styles', function(pkg, next) {
    var files = (pkg.config.styles || []).filter(function(file){
      return path.extname(file) === '.styl';
    });
    files.forEach(function(file, i){
      var realpath = pkg.path(file);
      var str = fs.readFileSync(realpath, 'utf8');
      pkg.addFile('styles', file.replace('.styl', '.css'), whitespace(str));
      pkg.removeFile('styles', file);
    });
    next();
  });
};