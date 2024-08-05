const express=require("express")
const app=express();
const PORT=8000;
const db=require("./db")
const userRoute=require("./routes/userroutes")
const passport=require("./auth")



app.use(express.urlencoded({ extended: false }));



app.use(passport.initialize())


const authinticator=passport.authenticate("local",{session:false})




app.use("/",authinticator,userRoute)







app.listen(PORT,(err)=>{

err?console.log("node server failed"):console.log("node server started successfully at port",PORT);





})


