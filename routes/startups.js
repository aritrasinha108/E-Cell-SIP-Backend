const express=require('express');
const router=express.Router();
const deleteFile=require('../utils/deleteFile');
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


let errors=[];


router.get('/',(req,res)=>{
res.render('startup');
});


router.post('/register',upload.single('file'),async (req,res)=>{
    errors=[];
    console.log(req.body);
    console.log(req.file);
    if(validateForm(req.body)==true)
    {
          let existingOrg= await Company.findOne({org:req.body.org});
          if(existingOrg)
          {   
            deleteFile(req.file.id);
           errors.push({msg:"Company already exists"});
            res.render('startup',{errors:errors});
            return;
        }

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
    res.flash("You are registered successfully...",'success');
    res.redirect('/student');
    
    }
    else
    {   deleteFile(req.file.id);
        errors.push({msg:"Invalid Point of Contact name or email"});
        res.render('startup',{errors:errors});
    }
    
  
    
})

module.exports=router;