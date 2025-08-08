import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// NOTE: For production, avoid storing private API keys client-side.
// The user requested a direct frontend call, so we embed the key here as asked.
const GEMINI_API_KEY = "AIzaSyDZwDT3-oqkWclTeuRtgbgh2IUJYP0kUp8";
const GEMINI_MODEL = "gemini-1.5-flash";
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1/models/${GEMINI_MODEL}:generateContent`;

type ChatMessage = {
  role: "user" | "model";
  text: string;
  isError?: boolean;
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "model",
      text: "Hi! I can help you with concert info, venues, and ticket booking.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const newUserMsg: ChatMessage = { role: "user", text };
    const convo = [...messages, newUserMsg];
    setMessages(convo);
    setInput("");
    setLoading(true);

    try {
      const contents = convo
        .filter((m) => !m.isError)
        .map((m) => ({
          role: m.role,
          parts: [{ text: m.text }],
        }));

      const res = await fetch(GEMINI_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": GEMINI_API_KEY,
        },
        body: JSON.stringify({ contents }),
      });

      if (!res.ok) {
        throw new Error(`Gemini error ${res.status}`);
      }

      const data = await res.json();
      const replyText =
        data?.candidates?.[0]?.content?.parts
          ?.map((p: { text?: string }) => p.text)
          .filter(Boolean)
          .join(" ") || "Sorry, I couldn't generate a response.";

      setMessages((prev) => [...prev, { role: "model", text: replyText }]);
    } catch (err) {
      console.error("Gemini request failed", err);
      setMessages((prev) => [
        ...prev,
        { role: "model", text: "Sorry, something went wrong. Please try again.", isError: true },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={() => setOpen((o) => !o)}
        className="rounded-full bg-primary text-primary-foreground p-3 shadow-glow hover-scale focus:outline-none"
        aria-label="Open chatbot"
      >
        <MessageCircle />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mt-3 w-[320px] rounded-lg border bg-background shadow-elevated"
          >
            <div className="flex items-center justify-between p-3 border-b">
              <p className="text-sm font-medium">Concert Assistant</p>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chatbot"
                className="p-1 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-3 space-y-3 max-h-80 overflow-y-auto">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-md px-3 py-2 text-sm ${
                      m.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-accent/40"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="rounded-md px-3 py-2 text-sm bg-accent/40">
                    <div className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-muted-foreground animate-pulse" style={{ animationDelay: "0ms" }} />
                      <span className="h-2 w-2 rounded-full bg-muted-foreground animate-pulse" style={{ animationDelay: "150ms" }} />
                      <span className="h-2 w-2 rounded-full bg-muted-foreground animate-pulse" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={scrollRef} />
            </div>

            <form onSubmit={sendMessage} className="p-3 border-t flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about concerts, venues, tickets..."
                className="flex-1 rounded-md border bg-background px-3 py-2 text-sm focus:outline-none"
                aria-label="Type your message"
                disabled={loading}
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
                disabled={loading || !input.trim()}
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
