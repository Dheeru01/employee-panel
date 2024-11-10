const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to get all employees (authentication required)
router.get('/employees', authMiddleware, employeeController.getEmployees);

// Route to create an employee (authentication required)
router.post('/employees', authMiddleware, employeeController.createEmployee);

// Route to update an employee (authentication required)
router.put('/employees/:id', authMiddleware, employeeController.updateEmployee);

// Route to delete an employee (authentication required)
router.delete('/employees/:id', authMiddleware, employeeController.deleteEmployee);

module.exports = router;
