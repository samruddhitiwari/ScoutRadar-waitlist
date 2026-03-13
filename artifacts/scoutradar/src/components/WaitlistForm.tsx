import { useState } from "react";
import { useJoinWaitlist } from "@/hooks/use-waitlist";
import { CheckCircle2, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface WaitlistFormProps {
  className?: string;
  size?: "default" | "large";
}

export function WaitlistForm({ className, size = "default" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  const { mutate, isPending } = useJoinWaitlist();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setErrorMessage("");
    mutate(email, {
      onSuccess: () => {
        setIsSuccess(true);
      },
      onError: (err) => {
        setErrorMessage(
          err.message === "duplicate" 
            ? "You're already on the waitlist!" 
            : err.message
        );
      }
    });
  };

  const isLarge = size === "large";

  return (
    <div className={cn("w-full max-w-md", className)}>
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center space-x-3 rounded-2xl bg-primary/10 border border-primary/20 px-6 py-4 text-primary-foreground"
          >
            <div className="flex-shrink-0 bg-primary/20 p-2 rounded-full">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-white">You're on the waitlist!</p>
              <p className="text-sm text-white/70">We'll notify you when we launch.</p>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="relative"
          >
            <div className="relative flex flex-col sm:flex-row items-center gap-3">
              <div className="relative w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-xl blur-md opacity-0 transition-opacity duration-300 peer-focus-within:opacity-100" />
                <input
                  type="email"
                  required
                  placeholder="Enter your work email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isPending}
                  className={cn(
                    "peer relative w-full rounded-xl bg-secondary/80 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all backdrop-blur-sm",
                    isLarge ? "px-6 py-4 text-lg" : "px-5 py-3"
                  )}
                />
              </div>
              <button
                type="submit"
                disabled={isPending || !email}
                className={cn(
                  "group relative w-full sm:w-auto flex-shrink-0 flex items-center justify-center space-x-2 rounded-xl bg-primary font-semibold text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-70 disabled:cursor-not-allowed",
                  isLarge ? "px-8 py-4 text-lg" : "px-6 py-3"
                )}
              >
                <span>{isPending ? "Joining..." : "Join Waitlist"}</span>
                {isPending ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                )}
              </button>
            </div>
            {errorMessage && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-8 left-2 flex items-center text-sm text-red-400"
              >
                <AlertCircle className="h-4 w-4 mr-1.5" />
                {errorMessage}
              </motion.div>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
