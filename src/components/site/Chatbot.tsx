import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot() {
  const [open, setOpen] = useState(false);

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
              <button onClick={() => setOpen(false)} aria-label="Close chatbot" className="p-1 text-muted-foreground hover:text-foreground">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="p-3 space-y-2">
              <div className="text-sm bg-accent/40 p-3 rounded-md">
                Hi! I can help you with concert info, venues, and ticket booking.
              </div>
              <input
                disabled
                placeholder="Type a message (coming soon)"
                className="w-full rounded-md border bg-background px-3 py-2 text-sm text-muted-foreground"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
