const mongoose=require("mongoose");
const schema = mongoose.Schema({
//Write missing code here
Title:String,
Field:String,
Content:String,
Year:Number

});


//Write missing code here
const blogData=mongoose.model('model',schema);
module.exports=blogData;
