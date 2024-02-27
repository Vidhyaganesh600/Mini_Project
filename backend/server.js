const express=require("express")
const mongo=require("mongoose");
const path=require("path")
const app=express()

//DataBase Connection
mongo.connect("mongodb://127.0.0.1/")
.then(()=> {console.log("DataBase Connection SUccessfull");})
.catch((err)=>{console.log(err);})

const port=process.env.PORT || 6800

//using middleware to read data in JSON formate
app.use(express.json())

//using middleware to identify the Static file
app.use(express.static(path.join(__dirname,"../frontend")))


app.get("/",(req,res)=>
{ 
    res.sendFile(path.join(__dirname,"../frontend/html/index.html"))
})

app.listen(port,()=>{
    console.log(`Server Running at http://localhost:${port}`);
})

