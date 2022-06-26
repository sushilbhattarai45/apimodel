import mongoose from "mongoose";
const postschema = mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    number:{
        type:Number,
    },
    Date:{
        type:Date,
        default:Date.now()
    }
});
const posts= mongoose.model("Posts", postschema)
export default posts;