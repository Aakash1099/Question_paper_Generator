# 📄 AI-Based Question Paper Generator

An **AI-powered Question Paper Generator** that creates **university-format question papers** from **scanned notes, textbooks, or syllabus images**.
The system uses **OCR + a locally hosted AI (Ollama)** to generate questions and exports them as a **Word (.docx) document** — completely **offline** and **without paid APIs**.

---

## 🚀 Features

* 📤 Upload scanned images or notes
* 🔍 OCR to extract text automatically
* 🧠 Local AI (Ollama) for question generation
* 📝 University-style question paper format
* ⚖️ Supports marks & difficulty levels
* 📄 Export generated paper as **Word (.docx)**
* 🌐 No internet or paid API required

---

## 🧠 How It Works

```
Image / Notes Upload
        ↓
OCR (Text Extraction)
        ↓
Local AI (Ollama LLM)
        ↓
Question Paper Generation
        ↓
Word (.docx) Download
```

---

## 🛠 Tech Stack

### Frontend

* React (Vite)
* Axios

### Backend

* Node.js
* Express.js
* Multer (file upload)
* Tesseract.js (OCR)
* docx (Word document generation)

### AI (Offline)

* Ollama
* Local LLM (phi3:mini / mistral)

---

## 📂 Project Structure

```
question-paper-generator/
│
├── client/              # React frontend
│   └── src/
│       └── App.jsx
│
├── server/              # Node.js backend
│   ├── services/
│   │   ├── ocr.js
│   │   ├── localAI.js
│   │   └── wordExport.js
│   ├── uploads/
│   └── index.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/question-paper-generator.git
cd question-paper-generator
```

---

### 2️⃣ Backend Setup

```bash
cd server
npm install
node index.js
```

Backend runs on:

```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🤖 Local AI Setup (Ollama)

### Install Ollama

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

### Download a Fast Model (Recommended)

```bash
ollama pull phi3:mini
```

Ollama runs automatically on:

```
http://localhost:11434
```

---

## 🧪 Usage

1. Upload a scanned image or notes
2. Click **Upload & Extract Text**
3. Review extracted text
4. Click **Generate Question Paper**
5. Download the paper as **Word (.docx)**

---

## 📄 Sample Output Format

```
Section A (10 × 2 = 20 Marks)
1. Define process.
2. What is deadlock?

Section B (5 × 6 = 30 Marks)
11. Explain CPU scheduling algorithms.

Section C (3 × 10 = 30 Marks)
21. Explain virtual memory with diagram.
```

---

## 🔐 Why Local AI?

* ❌ No OpenAI / paid credits
* ❌ No API keys
* ✅ Fully offline
* ✅ Faster testing
* ✅ Ideal for academic projects

---

## 🎓 Academic Use Case

* University exam paper setting
* Internal assessments
* Faculty question bank generation
* Final year MCA project

---

## 📌 Future Enhancements

* Unit-wise marks blueprint
* Difficulty tuning (Easy / Medium / Hard)
* Teacher login & approval
* PDF export
* MCQ + answer key generation
* Multi-language support

---

## 👨‍💻 Author

**Aakash Ashwin Girhe**
MCA Student | Full Stack Developer
📧 Email: [aakashgirhe289@gmail.com](mailto:aakashgirhe289@gmail.com)

---



