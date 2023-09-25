const mongoose = require('mongoose');
const patientSchema = new mongoose.Schema({
    name : {
        type:String,
        required : [true, 'please enter you name'],
        unique : true
    },
    // password: {
    //     type:String,
    //     required:[true, "please enter the password"],
    //     minLen : [6, 'password should be greater than 6 character'],
    // },
    reports : [{
      status: {
        type : String,
        required : true,
        enum : ["Negative", "Travelled-Quarantine", "Symptoms-Quarantine","positive-Admit"]
      },
      date : {
        type : Date,
        required : true,
      }
    },
    ],
    doctor : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Doctor",
        required:true,
    }


});
const Patient = new mongoose.model("Patient",patientSchema);
module.exports = Patient;