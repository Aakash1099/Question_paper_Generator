import { Document, Packer, Paragraph, TextRun } from "docx";
import fs from "fs";

export const generateWordDoc = async (paperText) => {
  const lines = paperText.split("\n");

  const doc = new Document({
    sections: [
      {
        children: lines.map(
          (line) =>
            new Paragraph({
              children: [
                new TextRun({
                  text: line,
                  font: "Times New Roman",
                  size: 24, // 12pt
                }),
              ],
            })
        ),
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  const filePath = "uploads/Question_Paper.docx";
  fs.writeFileSync(filePath, buffer);

  return filePath;
};
