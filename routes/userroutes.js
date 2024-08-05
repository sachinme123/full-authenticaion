const express=require("express")
const Router=express.Router();
const User=require("../models/userSchema")


Router.get("/",async(req,res)=>{

try{
const getData=await User.find();
res.status(200).json(getData)


}
catch(err){
    console.log(err);
    res.status(500).json({error:"internal server errors while getting data"})
    

}




})




Router.post("/signup",async(req,res)=>{
    const userData=req.body;
try{

const newUser=new User(userData);
const response=await newUser.save();

console.log("sign up user successfully");
res.status(200).json(response)





}
catch(err){

console.log(err);
res.status(500).json({error:"internal server errors"})


}



})



module.exports=Router;
