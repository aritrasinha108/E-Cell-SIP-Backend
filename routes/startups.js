const express=require('express');
const router=express.Router();

const {mongoURI1,mongoURI2}=require('../config');
const mongoose=require('mongoose');
const validateForm=require('../utils/validate');
const upload=require('../utils/fileStore');
const Company=require('../models/company');

 
 

mongoose.connect(mongoURI1,{ useUnifiedTopology: true,useNewUrlParser: true }).then(()=>{
    console.log("mongoDB connected");
})
.catch(err=>{
    throw err;
});





router.get('/',(req,res)=>{
res.render('startup');
});


router.post('/register',upload.single('file'),async (req,res)=>{
    console.log(req.body);
    console.log(req.file);
    if(validateForm(req.body))
    {
    let startup=new Company({
        org:req.body.org,
        pocName:req.body.name,
        pocMail:req.body.email,
        pocPhone:req.body.phone,
        fileName:req.file.filename,
        incentive:req.body.amount,
        duration:req.body.duration
    });
    await startup.save();
    res.redirect('/student');
    
    }
    
  
    
})

module.exports=router;