const ticoController = require('./../controllers/pages');
const path = require('path');
const multer  = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log('hit destination', req);
        cb(null, './public/src/assets/uploads/')
      },
      filename: function (req, file, cb) {
        console.log('hit filename', file);
        cb(null, file.originalname)
      }
});
const upload = multer({storage:storage});

module.exports = (app) => {
    app.get('/api/allPages', ticoController.allPages);
    // app.post('/api/Pages', ticoController.addPages);
    app.put('/api/Pages/:id', ticoController.editPage); 
    app.delete('/api/Pages/:id', ticoController.deletePage); 
    app.post('/api/Pages', upload.single('image'), ticoController.addPages);
    app.all('*',(req,res)=> res.sendFile(path.resolve('./public/dist/public/index.html')));
}