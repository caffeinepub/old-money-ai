import { Button } from "@/components/ui/button";
import {
  BarChart3,
  DollarSign,
  Lightbulb,
  Mail,
  Rocket,
  Target,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const slides = [
  {
    id: 1,
    icon: Lightbulb,
    number: "01",
    title: "The Opportunity",
    content:
      "100M+ Indian men (18–40) waste ₹10k+/yr on mismatched clothes. No personalized, shoppable style guidance exists for the old money niche.",
    highlight: "100M+",
    highlightLabel: "potential users",
  },
  {
    id: 2,
    icon: Target,
    number: "02",
    title: "The Solution",
    content:
      "Quiz → AI outfits → 1-click buys + premium human stylist. Example: Office Pack (₹17k, 5 items). Freemium + affiliate model.",
    highlight: "₹17k",
    highlightLabel: "starter pack",
  },
  {
    id: 3,
    icon: TrendingUp,
    number: "03",
    title: "Market Size",
    content:
      "AI Stylist market: $101M (2024) → $2B (2033), 38% CAGR. India TAM: 50M users × ₹500 ARPU = ₹25,000 Cr opportunity.",
    highlight: "38%",
    highlightLabel: "CAGR growth",
  },
  {
    id: 4,
    icon: DollarSign,
    number: "04",
    title: "Business Model",
    content:
      "Freemium Subs (40% revenue), Affiliate commissions 10% (50% revenue), Premium Styling sessions (10% revenue). Y1 Target: ₹30L | Break-even: 500 users.",
    highlight: "₹30L",
    highlightLabel: "year 1 target",
  },
  {
    id: 5,
    icon: Rocket,
    number: "05",
    title: "Traction Plan",
    content:
      "MVP: Landing + WhatsApp (Week 1). Goal: 100 users Month 1, 1,000 by Month 3. First 10: Free consults for testimonials.",
    highlight: "1,000",
    highlightLabel: "users by month 3",
  },
  {
    id: 6,
    icon: Users,
    number: "06",
    title: "Team",
    content:
      "Visionary founder based in Lucknow. 5 freelance stylists (Upwork/Instagram). No-code MVP → AI APIs for clothing try-on.",
    highlight: "5+",
    highlightLabel: "stylists on board",
  },
  {
    id: 7,
    icon: Trophy,
    number: "07",
    title: "Competition Edge",
    content:
      "Old Money Men-Only niche vs Stitch Fix (women-focused, US pricing). India-first pricing + hybrid AI/Human model is our unfair advantage.",
    highlight: "#1",
    highlightLabel: "niche leader",
  },
  {
    id: 8,
    icon: BarChart3,
    number: "08",
    title: "The Ask",
    content:
      "₹50L Seed: 40% App Build, 30% Marketing (Reels/Instagram), 20% Stylists, 10% Ops. Exit: Acquisition by Myntra/Zara in 3–5 yrs.",
    highlight: "₹50L",
    highlightLabel: "seed ask",
  },
  {
    id: 9,
    icon: Mail,
    number: "09",
    title: "Contact",
    content:
      "\"Be the Tommy Hilfiger of AI Styling for India.\" Reach out to partner, invest, or collaborate on building India's most elegant men's brand.",
    isContact: true,
  },
];

export default function InvestorSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="investors" className="py-32 bg-cream relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold/30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-gold font-semibold tracking-[0.3em] uppercase text-sm mb-4">
            Pitch Deck
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
            For Investors & Partners
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="font-serif text-xl text-navy/60 max-w-2xl mx-auto">
            Old Money AI is seeking ₹50L seed funding to launch India's first AI
            + human stylist for men
          </p>
        </motion.div>

        {/* Pitch deck grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {slides.map((slide, index) => {
            const Icon = slide.icon;
            return (
              <motion.div
                key={slide.id}
                data-ocid={`investor.item.${slide.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className={`relative bg-cream border border-beige-dark hover:border-gold/40 hover:shadow-elegant transition-all duration-400 overflow-hidden group ${
                  slide.isContact ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Top accent bar removed — replaced by left border on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold/0 group-hover:bg-gold/60 transition-all duration-400" />

                <div className="p-7">
                  {/* Header row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 border border-navy/15 bg-beige flex items-center justify-center group-hover:border-gold/40 group-hover:bg-gold/5 transition-all duration-300">
                        <Icon className="w-4 h-4 text-navy/70 group-hover:text-gold transition-colors duration-300" />
                      </div>
                      <span className="font-display text-sm font-bold text-navy/30 tracking-widest">
                        {slide.number}
                      </span>
                    </div>
                    {slide.highlight && (
                      <div className="text-right">
                        <p
                          className="font-display text-2xl font-bold leading-none"
                          style={{ color: "oklch(0.72 0.12 68)" }}
                        >
                          {slide.highlight}
                        </p>
                        <p className="text-xs text-navy/40 uppercase tracking-wide font-semibold mt-1">
                          {slide.highlightLabel}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-navy mb-3">
                    {slide.title}
                  </h3>

                  {/* Content */}
                  <p className="font-serif text-base text-navy/60 leading-relaxed">
                    {slide.content}
                  </p>

                  {/* Contact CTA */}
                  {slide.isContact && (
                    <Button
                      data-ocid="investor.contact_button"
                      onClick={() => handleScroll("#contact")}
                      className="mt-6 bg-navy text-cream hover:bg-navy/90 font-semibold rounded-sm tracking-wide w-full py-5"
                    >
                      Get in Touch
                    </Button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 border border-gold/40 px-8 py-4 bg-gold/5">
            <TrendingUp className="w-5 h-5 text-gold" />
            <p className="font-serif text-lg text-navy/70">
              Target: India Quotient, angel networks in Lucknow/Delhi, and
              strategic partners
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
