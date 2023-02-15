// const express = require('express');
// const bodyparser = require("body-parser");
// // const app = express()
// app.use(bodyparser.urlencoded({extended:true}));
// const port = 3000
// app.get("/",function(req,res){
//     res.sendFile(__dirname + "/index.html");
// })
// app.post("/",function(req,res){
// var weight =  Number(req.body.Weight);
// var height = Number(req.body.Height)
// var result = weight/(height*height);
// res.send( "your B.M.I is"+ result);
// });
//
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const express = require("express");
const bodyparser = require("body-parser")
const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.sendFile(__dirname +"/index.html")
});
app.post("/",function(req,res){
  var num1 = Number(req.body.num1)
  var num2 = Number(req.body.num2)
  var operator = (req.body.operator)
if (operator == '+'){
  var result =  num1+num2
  res.send("<h1>Your answer is "+ result+"</h1>");

}
if (operator == '-'){
   var result = (num1 - num2)

  res.send("<h1>Your answer is "+ result+"</h1>");
}
if (operator == '*'){
  var result = num1*num2
  res.send("<h1>Your answer is "+ result+"</h1>");
}
if (operator == '/'){
  var result = num1/num2
  res.send("<h1>Your answer is "+ result+"</h1>");
}

})
app.listen(3000, function(){
  console.log("server is running on port 3000")
})
