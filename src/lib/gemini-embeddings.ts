import { GoogleGenerativeAI } from "@google/generative-ai";

const gemini = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function geminiEmbeddings(text: string) {
  const inputText = text.replace(/\n/g, " ");
  const model = gemini.getGenerativeModel({ model: "text-embedding-004" });
  const response = await model.embedContent(inputText);
  return response.embedding.values as number[];
}
