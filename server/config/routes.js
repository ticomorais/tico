const ticoController = require('./../controllers/pages');
const path = require('path');

module.exports = (app) => {
    app.get('/api/allPages', ticoController.allPages);
    app.post('/api/Pages', ticoController.addPages);
    app.put('/api/Pages/:id', ticoController.editPage); 
    app.delete('/api/Pages/:id', ticoController.deletePage); 
    app.all('*',(req,res)=> res.sendFile(path.resolve('./public/dist/public/index.html')));
}