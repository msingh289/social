const router = require("express").Router();
const user = require("../models/user");

router.get("/register", async function(req,res){
  const per1 = await new Medi({
    name: "Kush",
    email: "ks123@gmail.com"
  });
  const per2 = await new Medi({
    name: "Rahul",
    email: "Rs123@gmail.com"
  });
  Medi.insertMany([per1,per2],
  function(err){
    if(err){
      console.log(err);
    }
    else{
      console.log("success");
    }
  });
// create 2 users with their name and email as they were required and then inserted them in DB by using insert many function s.t if their is any error it
// gets logged otherwise it logs success
const peronSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 20
  },
  follower : mediSchema
});
const Person = mongoose.model("Person" ,peronSchema);
const person = new Person ({
  name: "kunal",
  follower : per2
});
person.save();
// created a person schema s.t their is a member as follower with mediSchema i.e if user add it they gets all info the user who have added them
// and hv shown it using a example of user kunal 
module.exports = router;
