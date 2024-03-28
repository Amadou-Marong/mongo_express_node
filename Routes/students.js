const express = require('express');
const student_Act = require('../Controllers/students');
const router = express.Router();

router.get('/', student_Act.getStudents);
router.get('/:roll', student_Act.getSpecStudent);
router.post('/', student_Act.createStudent);
