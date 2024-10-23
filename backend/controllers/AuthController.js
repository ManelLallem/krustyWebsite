// userController.js

const User = require('../data/users');  // Import the User model
const bcrypt = require('bcrypt');  // For hashing passwords
const jwt = require('jsonwebtoken');

// Function to create a new user
const createUser = async (req, res) => {
    try {
        const { firstName, lastName, username, password } = req.body;

        // Check if all fields are provided
        if (!firstName || !lastName || !username || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if the username already exists
        const existingUser = await User.findOne({ username: username });
        if (existingUser) {
            return res.status(409).json({ message: "Username already taken" });
        }

        // Hash the password before saving to the database
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const newUser = new User({
            firstName,
            lastName,
            username,
            password: hashedPassword,  // Save the hashed password
        });

        // Save the user to the database
        await newUser.save();

        // Return a success response
        return res.status(201).json({
            message: "Account created successfully",
            user: {
                id: newUser._id,
                username: newUser.username,
                firstName: newUser.firstName,
                lastName: newUser.lastName
            }
        });
    } catch (error) {
        console.error("Error creating account:", error);
        return res.status(500).json({ message: "Server error" });
    }
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Validate password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Create and return JWT token
        const token = jwt.sign(
            { id: user._id, username: user.username },
            '1111',  // this is the secrect key that should be nrmly stored in a .env file 
            { expiresIn: '1h' }
        );

        return res.status(200).json({ token });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};




module.exports = { createUser,loginUser};