var express = require('express');
var router = express.Router();
const {dropAndSaveCSEData ,dropAndSaveRoomNumbers, dropAndSaveSubjects} = require('../controllers/addDetails');

router.post('/rollNumbers', dropAndSaveCSEData); // for sending rollnumbers to database

router.post('/roomNumbers',dropAndSaveRoomNumbers); // for sending room numbers to database

router.post('/addSubjects',dropAndSaveSubjects); // for sending Subjects to database

module.exports = router;
