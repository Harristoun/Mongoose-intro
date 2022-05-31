const { Router } = require('express');

const { studentBehavior } = require('../controllers/students.controller');

const router = Router();

router.get('/student', studentBehavior.getStudents);

router.post('/student', studentBehavior.postStudenst);

router.delete('/student/:id', studentBehavior.deleteStudents);

router.patch('/student/:id', studentBehavior.pathStudent);

module.exports = router
