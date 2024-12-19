const mongoose = require('mongoose');


const appointmentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    appointmentDate:{
        type:String,
        required:true,
    },
    appointmentTime:{
        type:String,
        required:true,
    },
    workType:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
    createdAt:{
        type:String,
        default:Date.now,
    }
})


const Appointment = new mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;