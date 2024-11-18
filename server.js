const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const fileRoutes = require("./routes/fileRoutes");

const app = express();
connectDB();

app.use(bodyParser.json());
app.use("/auth", authRoutes);
app.use("/files", fileRoutes);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
