const Employee = require('../models/Employee');

exports.getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find({});
        res.json(employees);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

exports.createEmployee = async (req, res) => {
    try {
        const { name, email, position, department, phoneNumber, address } = req.body;

        // Check if employee with email already exists
        let employee = await Employee.findOne({ email });
        if (employee) {
            return res.status(400).json({ message: 'Employee with this email already exists' });
        }

        // Create new employee
        employee = await Employee.create({
            name,
            email,
            position,
            department,
            phoneNumber,
            address
        });

        res.status(201).json({ message: 'Employee created successfully', employee });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};