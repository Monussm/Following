const express=require('express');
const port=process.env.port || 3000;
const app=express();
const path=require('path');
const hbs=require('hbs');
const mypublic=path.join(__dirname,"../public");
const mypartials=path.join(__dirname,"../partials");
app.use(express.urlencoded({extended: false}));
app.use(express.static(mypublic));
app.set("view engine","hbs");
hbs.registerPartials(mypartials)
// getting-started.js
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
await mongoose.connect('mongodb+srv://monug1513:monu123@work.eqglgeu.mongodb.net/test');
console.log("data connected");

}
const kittySchema = new mongoose.Schema({
  ProductName: String,
  Price:Number,
  Category:String,
  
  
});
const Kitten = mongoose.model('Kitten', kittySchema);


app.get("/",async(req,res)=>{

var Category="female"

const hello = await Kitten.findOne({Category})
Category="Male"
const hi=await Kitten.findOne({Category})
res.render("index")
console.log(hello,hi)

})

app.get("/men",(req,res)=>{
res.render("men")
})



app.get("/women",(req,res)=>{
res.render("women")
})

app.get("/kid",(req,res)=>{
    res.render("kid")
})







app.listen(port,(req,res)=>{

console.log("Running on port 3000")



})
