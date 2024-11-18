const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, "jwt_secret_key");
    req.user = { userId: decoded.userId }; // Ensure userId is set here
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token." });
  }
};

module.exports = authMiddleware;
