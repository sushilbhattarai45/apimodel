import express from "express";
import mongoose  from "mongoose";
const app = express();
import 'dotenv/config';
import postrouter from './route/post.js'
import bodyParser from 'body-parser';
app.use(bodyParser.json())
app.get('/', (req,res)=>
{
    res.send("hello world");
}
)

mongoose.connect("mongodb+srv://projectautowala:asdfghjkl@cluster0.dpkfkmx.mongodb.net/?retryWrites=true&w=majority", 

{  useNewUrlParser: true }, 
function(err) {
    if (err) {
        console.error('System could not connect to mongo server')
        console.log(err)
        process.exit()
    } else {
        console.log('System connected to mongo server')
    }
});    

app.use('/api/',postrouter)

app.listen(3000);
