const Doctor = require("../models/doctor");
const Patient = require("../models/Patient");
const jwt = require('jsonwebtoken');
module.exports.registerDoctor = async(req,res,next)=> {
    try {

        const doctor = await Doctor.create(req.body);
        res.status(200).json({
            success:true,
            message:"doctor created successfully"
        })
    } catch(error) {
        res.status(500).json({
            success:false,
            message:"could not create doctor , inter server error"
        });
    }
};

module.exports.login = async (req,res,next)=> {
    try {
        const user = Doctor.find(req.body);
        if(user) {
            const token = jwt.sign(user.id,"secret");
            res.status(200).json({
                success:true,
                token,
            });
        
        } else {
            res.status(404).json({
                success:false,
                message : "password and name now matched"
            })
        }

    } catch {
        res.status(500).json({
            success:false,
            message: "something get wrong"
        })
    }
}




module.exports.registerPatient = async (req,res,next)=> {
    try {
    req.body.doctor = "65103b995401a3a6f73437c1";
    const patient = await Patient.create(req.body);
    res.status(200).json({
        success:true,
        message:"patient is created succesfully"
    })
        
    } catch(error) {
        res.status(500).json({
            success:false,
            message:"could not create a patient"
        })
    }
};
module.exports.createReport = async(req,res,next)=> {
    try {
        const patient = await Patient.findById(req.params.id);
        req.body.date = Date.now();
        patient.reports.push(req.body);
        patient.save();
        res.status(200).json({
            success:"true",
            message: "report submitted sucessfully"
        })
     } catch(error) {
        res.status(500).json({
            success:false,
            messge: "problem in creating the report" 
        })
     }
};

module.exports.all_reports = async(req,res,next)=> {
    try {
        const patient = await Patient.findById(req,params.id);
        

        res.status(200).json({
            success: "true",
          reports : patient.reports

        })

    } catch(error) {
        res.status(500).json({
            success:"false",
            message: "could not fetch patient's reports",
        });
    }
}
module.exports.allReports = async (req,res,next)=> {
    try {
        const patient = await Patient.find({
            reports : {$elemMatch : {status : req.params.status}},
        });
        res.status(200).json({
            success:true,
            data : patient,
        })
    } catch(error) {
        res.status(500).json({
            success: false,
            message : "could not able to fetch the report"
        })
    }
}