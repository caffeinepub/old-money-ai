import { Button } from "@/components/ui/button";
import { useGetWhatsAppTemplates } from "@/hooks/useQueries";
import { Check, Copy, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const defaultTemplates = [
  {
    id: 1,
    title: "For New Leads",
    subtitle: "After quiz form submission",
    emoji: "🎯",
    template:
      'Hi [Name], thanks for your style quiz! You\'re a "College Starter" type—need navy chinos + loafers for that old money edge.\n\nYour custom pack:\n1. Beige chinos - ₹2.5k [link]\n2. White shirt - ₹1.5k [link]\nTotal: ₹8k for instant upgrade.\n\nFirst 10 get FREE 30-min call + 20% off forever. Reply YES to claim? 📸 Send photo for try-on.',
  },
  {
    id: 2,
    title: "Cold Outreach",
    subtitle: "Instagram DMs / LinkedIn",
    emoji: "🤝",
    template:
      'Hey [Name], saw your post on men\'s fashion. Building AI stylist for "old money" looks—navy blazers, clean fits for Indian guys.\n\nFree quiz + outfit plan? First 10 get stylist call free. Spots filling fast!\n\n[Quiz Link]\n\n- Lucknow-based\n- Shop Myntra/Zara links',
  },
  {
    id: 3,
    title: "Buyer Follow-Up",
    subtitle: "Post-purchase nurture",
    emoji: "💎",
    template:
      "[Name], your Pro sub is live! Here's your first pack links.\n\nUpgrade to Elite for stylist video? Or feedback on fits? 😎",
  },
];

function TemplateCard({
  template,
  index,
  backendText,
}: {
  template: (typeof defaultTemplates)[0];
  index: number;
  backendText?: string;
}) {
  const [copied, setCopied] = useState(false);
  const displayText = backendText || template.template;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(displayText);
      setCopied(true);
      toast.success("Template copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy. Please copy manually.");
    }
  };

  return (
    <motion.div
      data-ocid={`templates.item.${template.id}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-cream border border-beige-dark hover:border-gold/40 transition-all duration-300 hover:shadow-elegant overflow-hidden group"
    >
      {/* Card header */}
      <div className="px-7 py-5 border-b border-beige-dark flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">{template.emoji}</span>
            <h3 className="font-display text-lg font-bold text-navy">
              {template.title}
            </h3>
          </div>
          <p className="text-navy/50 text-sm font-semibold tracking-wide uppercase">
            {template.subtitle}
          </p>
        </div>
        <Button
          data-ocid={`templates.copy_button.${template.id}`}
          variant="outline"
          size="sm"
          onClick={handleCopy}
          className={`flex-shrink-0 rounded-sm transition-all duration-200 ${
            copied
              ? "border-green-500/50 bg-green-50 text-green-700"
              : "border-navy/20 text-navy/60 hover:border-gold/40 hover:text-gold hover:bg-gold/5"
          }`}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 mr-1.5" />
              Copied
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 mr-1.5" />
              Copy
            </>
          )}
        </Button>
      </div>

      {/* Template content */}
      <div className="p-7">
        <pre className="font-serif text-sm text-navy/65 leading-relaxed whitespace-pre-wrap break-words">
          {displayText}
        </pre>
      </div>
    </motion.div>
  );
}

export default function WhatsAppTemplates() {
  const { data: backendTemplates } = useGetWhatsAppTemplates();

  const backendTexts = backendTemplates
    ? [
        backendTemplates.leadTemplate,
        backendTemplates.coldOutreachTemplate,
        backendTemplates.buyerFollowUpTemplate,
      ]
    : [];

  return (
    <section className="py-32 bg-beige relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageCircle
              className="w-5 h-5"
              style={{ color: "oklch(0.72 0.12 68)" }}
            />
            <p className="text-gold font-semibold tracking-[0.3em] uppercase text-sm">
              Ready-to-Send
            </p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
            WhatsApp Templates
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="font-serif text-xl text-navy/60 max-w-xl mx-auto">
            Copy, personalise, and send. Get your first customers today.
          </p>
        </motion.div>

        {/* Template cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {defaultTemplates.map((template, index) => (
            <TemplateCard
              key={template.id}
              template={template}
              index={index}
              backendText={backendTexts[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
