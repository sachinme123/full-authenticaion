const mongoose=require("mongoose")


const mongoUrl='mongodb://localhost:27017/authetication';

const db=mongoose.connect(mongoUrl)
.then(()=>{

console.log("mongodb started successfully");


})
.catch((err)=>{

console.log("mongod db failed ",err);


})


module.exports=db;


