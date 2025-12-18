import { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const[paper, setPaper]=useState("");
  const [loading, setLoading] = useState(false);
const [status, setStatus] = useState("");


  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post(
      "http://localhost:5000/upload",
      formData
    );

    setText(res.data.text);
  };

 const generatePaper = async () => {
  if (!text) {
    alert("No content available for generation");
    return;
  }

  setLoading(true);
  setStatus("🤖 Generating question paper using AI...");
  setPaper("");

  try {
    const res = await axios.post("http://localhost:5000/generate", {
      content: text,
      subject: "Operating Systems",
      marks: 80,
      difficulty: "Medium",
    });

    setPaper(res.data.paper);
    setStatus("✅ Question paper generated successfully");
  } catch (err) {
    setStatus("❌ Failed to generate question paper");
  } finally {
    setLoading(false);
  }
};

const downloadWord = async () => {
  const res = await axios.post(
    "http://localhost:5000/export-word",
    { paper },
    { responseType: "blob" }
  );

  const url = window.URL.createObjectURL(new Blob([res.data]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "Question_Paper.docx");
  document.body.appendChild(link);
  link.click();
};


  return (
    <div style={{ padding: "40px" }}>
      <h1>Question Paper Generator</h1>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <button onClick={handleUpload}>
        Upload & Extract Text
      </button>

      <br /><br />

      {text && (
        <>
          <h3>Extracted Text:</h3>
          <textarea
            rows="15"
            cols="100"
            value={text}
            readOnly
          />
        </>
      )}

      <button onClick={generatePaper} disabled={loading}>
  {loading ? "Generating..." : "Generate Question Paper"}
</button>
{status && <p>{status}</p>}

<button onClick={downloadWord}>
  Download as Word
</button>

{paper && (
  <>
    <h3>Generated Question Paper</h3>
    <textarea rows="20" cols="100" value={paper} readOnly />
  </>
)}
    </div>
  );
}

export default App;
