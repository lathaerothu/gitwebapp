const express=require('express');

const app=express();


app.get('/',(req,res)=>{
    res.send ("Welcome..!!")
})
app.listen(1337,()=>{
    console.log("server running")
})