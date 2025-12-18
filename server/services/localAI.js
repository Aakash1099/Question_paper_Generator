import fetch from "node-fetch";

export const generateQuestionPaperLocal = async ({
  content,
  subject,
  marks,
  difficulty,
}) => {
  const prompt = `
You are a university question paper setter.

Subject: ${subject}
Difficulty: ${difficulty}
Total Marks: ${marks}

Rules:
- Follow Indian university exam format
- Avoid repetition
- Use Bloom's taxonomy
- Use ONLY the provided content

CONTENT:
${content}

FORMAT:

Section A (10 × 2 = 20 Marks)
1.
2.

Section B (5 × 6 = 30 Marks)
11.
12.

Section C (3 × 10 = 30 Marks)
21.
22.
`;

  const response = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "mistral",
      prompt,
      stream: false,
    }),
  });

  const data = await response.json();
  return data.response;
};
