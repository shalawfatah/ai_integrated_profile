"use client";

import { useState } from "react";

export default function SearchInput() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const quickLinks = [
    "Tell me about your MBA and leadership style.",
    "What is your experience with Next.js and Tailwind?",
    "How do you handle Cloud & DevOps?",
    "How do you use AI and n8n for automation?",
  ];

  async function handleAsk(selectedQuestion?: string) {
    const query = selectedQuestion || question;
    if (!query.trim()) return;

    setLoading(true);
    setAnswer("");
    if (!selectedQuestion) setQuestion(query); // Sync input if typed

    try {
      const res = await fetch("/api/ask-me", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: query }),
      });

      const data = await res.json();
      setAnswer(data.answer);
    } catch (err) {
      setAnswer(`Something went wrong. Please try again. ${err}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <h2 className="p-4 text-center">
        <span className="text-yellow-200 font-bold">Personal AI:</span> Ask
        Anything About My Programming Journey
      </h2>

      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAsk()}
            placeholder="e.g. Do you use Tailwind in production?"
            className="
              w-full rounded-2xl border border-zinc-300 bg-white
              px-5 py-3 pr-12 text-sm text-zinc-900
              placeholder-zinc-400 shadow-sm outline-none transition
              focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200
              dark:bg-zinc-900 dark:border-zinc-700 dark:text-zinc-100
              dark:placeholder-zinc-500 dark:focus:ring-zinc-700
            "
          />

          <button
            onClick={() => handleAsk()}
            disabled={loading}
            className="
              absolute right-3 top-1/2 -translate-y-1/2
              text-zinc-400 hover:text-zinc-600 transition
              disabled:opacity-50
            "
            aria-label="Ask AI"
          >
            {loading ? "⏳" : "🔍"}
          </button>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-wrap gap-2 justify-center">
          {quickLinks.map((link) => (
            <button
              key={link}
              onClick={() => {
                setQuestion(link);
                handleAsk(link);
              }}
              disabled={loading}
              className="
                px-3 py-1.5 text-xs rounded-full border border-zinc-300 
                bg-zinc-50 text-zinc-600 hover:bg-zinc-100 hover:border-zinc-400
                dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 
                dark:hover:bg-zinc-700 dark:hover:text-zinc-200
                transition-all active:scale-95 disabled:opacity-50 cursor-pointer
              "
            >
              {link}
            </button>
          ))}
        </div>
      </div>

      {answer && (
        <div className="rounded-xl bg-zinc-100 p-4 text-sm text-zinc-800 border border-zinc-200 dark:bg-zinc-800/50 dark:text-zinc-200 dark:border-zinc-700 animate-in fade-in slide-in-from-top-2 duration-300">
          <p className="leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
