const express=require('express');
const router=express.Router();
router.get('/',(req,res)=>{
res.send("This is the start up registration page");
});

module.exports=router;