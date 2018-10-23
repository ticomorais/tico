const mongoose = require('mongoose');
const Page = mongoose.model('Page');



module.exports = {
    allPages: (req,res) => {
        Page.find({}, (err,pages)=>{
            if(err){
                res.json(err);
            }else{
                res.json(pages);
            }
        }).sort({created_at:-1});
        // res.json("Working here");
    },
    singlePage: (req,res) => {
        Page.findOne({_id: req.params.id}, (err,page)=>{
            if(err){
                res.json(err);
            }else{
                res.json(page);
            }
        })
    },
    addPages: (req,res,next) => {
        console.log("Teste here", req.body)
        Page.create(req.body, (err,page)=>{
            if(err){
                res.json(err);
            }else{
                res.json(page);
            }
        })
    },
    deletePage: (req,res) => {
        Page.remove({_id: req.params.id}, (err,data)=>{
            if(err){
                res.json(err);
            }else{
                res.json(data);
            }
        })
    },
    editPage: (req,res) => {
        Page.update({_id: req.params.id}, req.body, (err,data)=>{
            if(err){
                res.json(err);
            }else{
                res.json(data);
            }
        })
    },
}   