const mongoose = require('mongoose');

const PageSchema = mongoose.Schema({
    title: String,
    content: String,
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now},

});

mongoose.model('Page', PageSchema);