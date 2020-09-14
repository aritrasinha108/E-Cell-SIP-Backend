const express=require('express');
const app=express();
app.set("view engine","ejs");
app.use(express.urlencoded({extended:false}));
const startupRouter=require('./routes/startups');
const studentRouter=require('./routes/student');

app.use('/startup',startupRouter);
app.use('/student',studentRouter);

app.get('/',(req,res)=>{
    res.send("This is the landing page");
});


app.listen(3000,()=>{
    console.log("Listening at port 3000");
});