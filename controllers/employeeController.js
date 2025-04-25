exports.getEmployees = (req, res) => {
    // Add logic to fetch employees
    res.json([{ id: 1, name: 'John Doe', email: 'john@example.com' }]);
};

exports.createEmployee = (req, res) => {
    const { name, email, position } = req.body;
    // Add logic to create an employee
    res.json({ message: 'Employee created', employee: { name, email, position } });
};