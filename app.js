var express=require("express");
const app=express();
var work="WORK LIST";
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs")
app.use(express.static("public"));
app.listen(3000,function() {
    console.log("server success");
});
var items=new Array();
var workitems=new Array();

app.get("/",function(req,res) {
    var today=new Date();
    var objects = {
        weekday:"long",
        month:"numeric",
        day:"numeric"
    }
    var day=today.toLocaleDateString("en-Us",objects);
    res.render("list", {listitle: day,Item:items});
    
   
})

app.post("/",function(req,res) {
     
     if(req.body.list=="work") {
         var workitem=req.body.newlist;
        workitems.push(workitem);
        res.redirect("/work")
     }
     else {
        var item=req.body.newlist;
     items.push(item);
     res.redirect("/");
     }


})
app.get("/work",function(req,res) {
      res.render("list",{listitle:"work",Item:workitems})   
})
