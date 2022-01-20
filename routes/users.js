const router = require("express").Router();
const user = require("../models/user");

router.put("/:id/friends", function (req, res) {
  Medi.updateOne({
  _id: ""},
{ request.push("req.body.userID") },
function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("success");
  }
});
});
// so if user1 add user 2 then in schema as we a request member so we update that by taking id of user2 as he is being send
//request s.t it is done by updateOne method of mongoose from CRUD operations
router.put("/:id/followers", function (req, res) {
  Medi.updateOne({
  _id: ""},
{ follower.push("req.bode.userID") },
function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("success");
  }
});
});
// now if user2 accepts request of user1 then we acquire value from form input of HTML(FRONT-END) and push it in array of user2 i.e. followers
// array and log succes and error if any their
router.post("/:id/delete", function(req,res){
const checkeditem = (req.body.checkbox);
  Medi.findByIdAndRemove(checkeditem,
  function(err){
    if(!err){
      console.log("deleted");
      res.redirect("/");
    }
  });
// now if user delete his/her acc so we accquire value alue from form input of HTML(FRONT-END)and using findByIdAndRemove method of mongoose
// we delete  their acc and redirects to home route

router.get("/", function(req,res){
  res.send("hey it's users route")
});


module.exports = router;
