const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const userSchema=new mongoose.Schema({

username:{type:String,unique:true,required:true},
email:{type:String,unique:true,required:true},
password:{type:String,required:true,minlength:8},

})


userSchema.pre('save',async function(next){

const currentUser=this;
if(!currentUser.isModified("password")){


return next();

}


try{

const genSalt=await bcrypt.genSalt(10);

//for hashing password
const hashedPass=await bcrypt.hash(currentUser.password,genSalt)
currentUser.password=hashedPass;




}
catch(err){

res.json({error:"salt generation and hashing failed"})


}







})




userSchema.methods.comparePass=async function(password){
try{

    const isMatch=await bcrypt.compare(password,this.password)
    return isMatch;

}
catch(err){

res.json({error:"failed in bcrypting pass in userschema.js line 56"})
    
}



}


const User=mongoose.model("user",userSchema)
module.exports=User;