// import dotenv from "dotenv";
// dotenv.config();

import express from "express";
import cors from "cors";
import multer from "multer";
import { extractTextFromImage } from "./services/ocr.js";
import { generateWordDoc } from "./services/wordExport.js";
import { generateQuestionPaperLocal } from "./services/localAI.js";




const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Question Paper Generator Backend is running");
});

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const filePath = req.file.path;

    // OCR only for images (for now)
    const extractedText = await extractTextFromImage(filePath);

    res.json({
      message: "File uploaded and text extracted",
      text: extractedText,
    });
  } catch (err) {
    res.status(500).json({ error: "OCR failed" });
  }
});
// local generate
app.post("/generate", async (req, res) => {
  try {
    console.log("📥 Generate request received");

    const { content, subject, marks, difficulty } = req.body;

    console.log("🤖 Sending prompt to Ollama...");
    const start = Date.now();

    const paper = await generateQuestionPaperLocal({
      content,
      subject,
      marks,
      difficulty,
    });

    const timeTaken = ((Date.now() - start) / 1000).toFixed(2);

    console.log(`✅ Ollama responded in ${timeTaken}s`);

    res.json({ paper });
  } catch (err) {
    console.error("❌ AI generation failed:", err.message);
    res.status(500).json({ error: "Local AI generation failed" });
  }
});

// word export
app.post("/export-word", async (req, res) => {
  try {
    const { paper } = req.body;

    const filePath = await generateWordDoc(paper);

    res.download(filePath);
  } catch (err) {
    res.status(500).json({ error: "Word export failed" });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
