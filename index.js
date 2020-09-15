const express=require('express');
const app=express();
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const startupRouter=require('./routes/startups');
const studentRouter=require('./routes/student');
const docRouter=require('./routes/docs');

app.use('/startup',startupRouter);
app.use('/student',studentRouter);
app.use('/doc',docRouter);
app.get('/',(req,res)=>{
    res.render("index");
});


app.listen(3000,()=>{
    console.log("Listening at port 3000");
});