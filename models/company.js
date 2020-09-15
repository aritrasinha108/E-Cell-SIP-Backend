const mongoose=require('mongoose');
const Orgs= new mongoose.Schema({
org:{
    type:String,
    required:true
},
pocName:{
    type:String,
    required:true
},
pocMail:{
    type:String,
    required:true
},
pocPhone:{
    type:String,
    required:true
},
fileName:{
type:String,
required:true
},
incentive:{
    type:String,
    required:true
},
duration:{
    type:String,
    required:true
},
website:{
    type:String,
    default:"NA"
},
registerAt:{
    type:Date,
    default:Date.now
}

    });

const Company=mongoose.model('Organisation',Orgs);
module.exports=Company;