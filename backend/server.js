const express= require('express')
require('dotenv').config()
const workoutlists = require('./routes/workout')
const mongoose=require('mongoose')
const cors = require('cors')

const app=express()

app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
app.use('/api/workouts',workoutlists)
//conmect to mongoose
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('Connected to db and localhost is ',process.env.PORT)
    })

})
.catch((error)=>{
    console.log(error)
})


