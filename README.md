# hospital api 
Creating an hosptial api and try to run on the postmen for learning purpose. 

## Tech Stack

**Client:** HTML,css,js

**Server:** Node, Express

**TEMPLATE:** EJS

**DATABASE:** mongodb


## 🚀 About Me
I'm a full stack developer...


## Authors

- [@jigneshsharma](https://github.com/jigneshsharma123)


## Installation

Install my-project with npm

```bash 
  1)-> download the code file in  the form of zip file and 
  extract them after that open with vsCode.
  2) open the Terminal(ctrl+`). 
  3)type npm instll 
  4)node index.js
  5)end
```
   ## API Endpoints
## Doctors

POST /doctors/register: Register a new doctor.

POST /doctors/login: Authenticate and receive a JWT.

## Patients

POST /patients/register: Register a new patient.

POST /patients/:id/create_report: Create a medical report for a patient.

GET /patients/:id/all_reports: List all reports for a patient, oldest to latest.

## Reports

GET /reports/:status: List reports filtered by status.

Authentication

JWT (JSON Web Token) is used for authentication.

To access protected routes, include the JWT in the Authorization header.

# folder Structure 
 - __C:\\Users\\hp\\Desktop\\hospital__
   - [README.md](README.md)
   - __config__
     - [database.js](config/database.js)
     - [passport.js](config/passport.js)
   - __controllers__
     - [userController.js](controllers/userController.js)
   - [index.js](index.js)
   - [list.md](list.md)
   - __models__
     - [Patient.js](models/Patient.js)
     - [doctor.js](models/doctor.js)
   - [node\_modules](node_modules)
   - [package\-lock.json](package-lock.json)
   - [package.json](package.json)
   - __routes__
     - [router.js](routes/router.js)

