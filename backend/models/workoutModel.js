const mongoose=require('mongoose')
const Schema=mongoose.Schema

const workoutschema=new Schema({
    title:{
        type:String,
        required:true
    },
    reps:{
        type:Number,
        required:true
    },
    load:{
        type:Number,
        required:true
    }
},{timestamps:true})

//create a model=by use the model we can interact wiyh the collection

module.exports=mongoose.model('workoutModel',workoutschema)
//Workout=name of the model
