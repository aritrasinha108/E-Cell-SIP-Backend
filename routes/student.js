const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const {mongoURI1,mongoURI2}=require('../config');
const Company=require('../models/company');




router.get('/',async (req,res)=>{
    let companies=await Company.find();
    res.render('student',{companies:companies});
})

module.exports=router;