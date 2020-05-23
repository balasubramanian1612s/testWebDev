var express=require("express");
var app=express();

app.get("/", function(req, res){
	res.send("Hi There From Express!");
});
app.get("/hi", function(req, res){
	res.send("Hi Da!");
});
app.get("/bye", function(req, res){
	res.send("Bye Da!");
});
app.get("*", function(req,res){
	res.send("Error Not Found!");
});
app.listen(process.env.PORT, process.env.IP,function(){
	console.log("Port Running!");
});