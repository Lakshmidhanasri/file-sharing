const File = require("../models/File");
const crypto = require("crypto"); // Missing import added

// File Upload
exports.uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const encryptedUrl = crypto.randomBytes(16).toString("hex");
    const file = new File({
      file_name: req.file.originalname,
      file_type: req.file.mimetype,
      uploaded_by: req.user.userId, // Ensure userId is set correctly
      encrypted_url: encryptedUrl,
    });

    await file.save();
    res.status(201).json({ message: "File uploaded successfully", file });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "File upload failed" });
  }
};

// List Files
exports.listFiles = async (req, res) => {
  try {
    const files = await File.find({ uploaded_by: req.user.userId });
    res.json(files);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve files" });
  }
};

// Download File
exports.downloadFile = async (req, res) => {
  res.status(200).json({ message: "Download feature coming soon" });
};
