import express from "express";
import Postmodel from '../model/postmodel.js';

const postrouter = express.Router();
postrouter.get('/',(req,res)=>
{
    console.log("ok")
    res.send("post  world");

})

postrouter.post('/post',async(req,res)=>
{
const set = new Postmodel ({
name :req.body.name,
number :req.body.number
});
console.log(set)
set.save()
  .then(data=>{
    res.json(data);
})
.catch(err=>{
    res.json({"message":"error"})
})

})
export default postrouter;