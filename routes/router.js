const passport = require('passport');
const express = require('express');
// import all controllers
// import SessionController from './app/controllers/SessionController';
const {registerDoctor, registerPatient, createReport, allReports, login} = require("../controllers/userController")
const router = express.Router();

router.post("/login",login)

router.post("/doctors/register",registerDoctor);
router.post("/patients/register",registerPatient);
router.post("/patients/:id/create_report",createReport);
router.get("/patients/:id/all_report",createReport);
router.get("/reports/:status",allReports);


module.exports = router;
  