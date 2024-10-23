const express = require('express');
const router = express.Router();
const krustyKrabController = require('../controllers/krustyKrabController');

// Route to fetch employees
router.get('/employees', krustyKrabController.getEmployees);

// Route to fetch dishes
router.get('/dishes', krustyKrabController.getDishes);

module.exports = router;
