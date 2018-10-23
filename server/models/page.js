const mongoose = require('mongoose');

const PageSchema = mongoose.Schema({
    title: String,
    category: String,
    content: String,
    image:{type:String, bin:Buffer},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now},

});

mongoose.model('Page', PageSchema);