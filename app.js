var express      =require("express"),
    app          =express(),
    bodyparser   =require("body-parser");



app.use(bodyparser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));



app.get("/",function(req,res){

    console.log("request for landing page");
    res.render("landing");
});


app.listen(process.env.PORT || 3000,function(){
    console.log("My Bazar server has allready started!!");
});