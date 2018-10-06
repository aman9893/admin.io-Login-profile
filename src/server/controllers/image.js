var connection = require('./../config');

module.exports.imageData = function (req, res) {

    var storage = multer.diskStorage({
        // destino del fichero
        destination: function (req, file, cb) {
          cb(null, './uploads/')
        },
        // renombrar fichero
        filename: function (req, file, cb) {
          cb(null, file.originalname);
        }
      });
      
      var upload = multer({ storage: storage });
      
      app.post("/upload", upload.array("uploads[]", 12), function (req, res) {
        console.log('files', req.files);
        res.send(req.files);
      });
}