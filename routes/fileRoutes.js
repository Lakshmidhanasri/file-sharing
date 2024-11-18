const express = require("express");
const {
  uploadFile,
  listFiles,
  downloadFile,
} = require("../controllers/fileController");
const authMiddleware = require("../middlewares/authMiddleware");
const multer = require("multer");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// Routes
router.post("/upload", authMiddleware, upload.single("file"), uploadFile);
router.get("/list-files", authMiddleware, listFiles);
router.get("/download-file/:file_id", authMiddleware, downloadFile);

module.exports = router;
