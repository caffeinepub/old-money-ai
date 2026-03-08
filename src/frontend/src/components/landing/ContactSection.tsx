import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitLead } from "@/hooks/useQueries";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const { mutateAsync: submitLead, isPending } = useSubmitLead();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Please fill in your name and email.");
      return;
    }
    try {
      await submitLead({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        message: form.message.trim(),
      });
      setSubmitted(true);
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-32 bg-navy relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, oklch(0.97 0.008 85) 0px, oklch(0.97 0.008 85) 1px, transparent 1px, transparent 50px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold font-semibold tracking-[0.3em] uppercase text-sm mb-4">
              Get In Touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4 leading-tight">
              Express Your Interest
            </h2>
            <div className="w-16 h-px bg-gold mb-8" />
            <p className="font-serif text-xl text-cream/60 leading-relaxed mb-10">
              Investor, partner, or early user — let's talk. We're building
              something genuinely differentiated and we'd love to have you on
              board from day one.
            </p>

            {/* Info list */}
            <div className="flex flex-col gap-5">
              {[
                {
                  label: "For Investors",
                  description:
                    "Seeking ₹50L seed. Full pitch deck available on request.",
                },
                {
                  label: "For Early Users",
                  description:
                    "First 10 get free 30-min stylist call + lifetime 20% off.",
                },
                {
                  label: "For Stylists",
                  description:
                    "Join our freelance stylist network. Lucknow-based preferred.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 p-5 border border-cream/10 hover:border-gold/30 transition-colors"
                >
                  <div className="w-1.5 bg-gold flex-shrink-0 mt-1 self-stretch" />
                  <div>
                    <p className="font-display font-bold text-cream mb-1">
                      {item.label}
                    </p>
                    <p className="font-serif text-cream/55 text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="bg-cream/5 border border-cream/10 p-8 flex flex-col gap-6"
                >
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="name"
                      className="text-cream/70 font-semibold text-sm uppercase tracking-wide"
                    >
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      data-ocid="contact.input"
                      type="text"
                      placeholder="Arjun Sharma"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/30 rounded-sm focus-visible:ring-gold/50 focus-visible:border-gold/50"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="email"
                      className="text-cream/70 font-semibold text-sm uppercase tracking-wide"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      data-ocid="contact.email_input"
                      type="email"
                      placeholder="arjun@example.com"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/30 rounded-sm focus-visible:ring-gold/50 focus-visible:border-gold/50"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="phone"
                      className="text-cream/70 font-semibold text-sm uppercase tracking-wide"
                    >
                      Phone{" "}
                      <span className="text-cream/40 normal-case font-normal tracking-normal">
                        (optional)
                      </span>
                    </Label>
                    <Input
                      id="phone"
                      data-ocid="contact.phone_input"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, phone: e.target.value }))
                      }
                      className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/30 rounded-sm focus-visible:ring-gold/50 focus-visible:border-gold/50"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="message"
                      className="text-cream/70 font-semibold text-sm uppercase tracking-wide"
                    >
                      Message / Interest
                    </Label>
                    <Textarea
                      id="message"
                      data-ocid="contact.textarea"
                      placeholder="I'm interested in investing / becoming an early user / joining as a stylist..."
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/30 rounded-sm focus-visible:ring-gold/50 focus-visible:border-gold/50 resize-none"
                    />
                  </div>

                  <Button
                    data-ocid="contact.submit_button"
                    type="submit"
                    disabled={isPending}
                    size="lg"
                    style={{
                      backgroundColor: "oklch(0.72 0.12 68)",
                      color: "oklch(0.13 0.015 250)",
                    }}
                    className="font-bold rounded-sm tracking-wide py-6 hover:opacity-90 w-full text-base"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  data-ocid="contact.success_state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-cream/5 border border-cream/10 p-12 flex flex-col items-center text-center gap-6"
                >
                  <div className="w-20 h-20 border-2 border-gold/40 flex items-center justify-center">
                    <CheckCircle2
                      className="w-10 h-10"
                      style={{ color: "oklch(0.72 0.12 68)" }}
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-cream mb-3">
                      Message Received
                    </h3>
                    <p className="font-serif text-lg text-cream/60 leading-relaxed">
                      Thank you for your interest in Old Money AI. We'll be in
                      touch within 24 hours to discuss next steps.
                    </p>
                  </div>
                  <div className="w-16 h-px bg-gold/40" />
                  <p className="text-cream/40 font-semibold text-sm tracking-wide uppercase">
                    Welcome to the gentlemen's circle
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
