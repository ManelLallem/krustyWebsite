const Employee = require('../data/Employee');
const Dish = require('../data/Dish');

// Controller to fetch employees
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);

  } catch (error) {
    res.status(500).json({ message: 'Error fetching employees' });
  }
};

// Controller to fetch dishes
exports.getDishes = async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.json(dishes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching dishes' });
  }
};
