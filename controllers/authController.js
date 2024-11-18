const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

// Sign-up
exports.signUp = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword, role });
    await user.save();
    res.status(201).json({
      message: "User registered successfully. Please verify your email.",
    });
  } catch (error) {
    res.status(500).json({ error: "Sign-up failed" });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      "jwt_secret_key",
      { expiresIn: "1h" }
    );
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};

// Email Verification
exports.verifyEmail = async (req, res) => {
  res.status(200).send("Email verified!");
};
