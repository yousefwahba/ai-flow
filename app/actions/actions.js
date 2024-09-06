"use server";

import { generateText } from "ai";
import { google } from "@ai-sdk/google";
export async function getAnswer(question) {
  const { text } = await generateText({
    model: google("models/gemini-1.5-pro-latest"),
    system: `You are a summarizer bot. Your task is to analyze scraped data from a website and summarize it in the shortest way possible. Provide only the most useful and relevant information.`,
    prompt: question,
  });

  return { text };
}
