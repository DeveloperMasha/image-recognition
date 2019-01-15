var express = require("express"); //to import the express library
var app = express();
var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');

app.get("/test",function(req,res){
   
//var fs = require('fs'); //remove in class

var visualRecognition = new VisualRecognitionV3({
  version: '2018-03-19',
  api_key: 'bnTiRQ75seYTzTzdehucb_ODIO-PoQMatEYNPc1lPlrB'
});

var images_file = fs.createReadStream('./picture.jpg');
var classifier_ids = ["food"];

var params = {
  url:"https://www.t-mobile.com/content/dam/t-mobile/en-p/cell-phones/apple/apple-iphone-x/silver/Apple-iPhoneX-Silver-1-3x.jpg"
};

visualRecognition.classify(params, function(err, response) {
  if (err)
    console.log(err);
  else
    console.log(JSON.stringify(response, null, 2))
});

})


//var listener = app.listen(process.env.PORT,process.env.IP,function(){
var listener = app.listen(4000,process.env.IP,function(){
	//var listener = app.listen(process.env.PORT,process.env.IP,function(){
	console.log("server has started");
	 console.log('Listening on port ' + listener.address().port);
});
