const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb://localhost:27017/mediaDB", {useNewUrlParser:true});


//middleware
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);




app.get("/", function(req,res){
  console.log("WELCOME");
});
app.listen(3000, function(){
  console.log("server at port 3000");
});
