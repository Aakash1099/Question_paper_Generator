import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateQuestionPaper = async ({
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
- Use Bloom's taxonomy
- Avoid repeated questions
- Use only the given content

CONTENT:
${content}

FORMAT STRICTLY AS:

Section A (10 × 2 = 20 Marks)
1.
2.
...

Section B (5 × 6 = 30 Marks)
11.
12.
...

Section C (3 × 10 = 30 Marks)
21.
22.
...
`;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0].message.content;
};
