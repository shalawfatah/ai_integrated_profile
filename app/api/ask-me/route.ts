import { shalawProfile } from "@/app/utils/shalawProfile";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { question } = await req.json();

  if (!question) {
    return NextResponse.json(
      { error: "No question provided" },
      { status: 400 },
    );
  }

  const API_KEY = process.env.GEMINI_API_KEY;

  /**
   * UPDATED FOR DEC 2025:
   * Use 'gemini-3-flash' for the latest frontier performance.
   * If you prefer the stable long-term version, use 'gemini-2.5-flash'.
   */
  const MODEL = "gemini-flash-latest";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // Gemini 3 uses system_instruction on the v1beta endpoint
        system_instruction: {
          parts: [{ text: shalawProfile }],
        },
        contents: [
          {
            role: "user",
            parts: [{ text: question }],
          },
        ],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 1000,
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Gemini API Error details:", JSON.stringify(data, null, 2));
      return NextResponse.json(
        { error: data.error?.message || "Gemini API Error" },
        { status: response.status },
      );
    }

    const answer =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I'm sorry, I couldn't generate an answer.";

    return NextResponse.json({ answer });
  } catch (error) {
    console.error("Fetch error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
