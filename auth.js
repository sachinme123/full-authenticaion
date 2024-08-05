const passport=require("passport")
const localStragity=require("passport-local").Strategy;

const User=require("./models/userSchema")


passport.use(new localStragity(async (username,password,done)=>{


try{
const getUser=await User.findOne({username:username})
if(!getUser){

    return done(null,false,{message:'incorrect username'})
}

const isPass=getUser.comparePass(password);
if(isPass){


return done(null,getUser)


}
else{


return done(null,false,{message:"incorrect password"})

}







}
catch(err){


return done(err)


}




}))





module.exports=passport;