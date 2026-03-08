import { Button } from "@/components/ui/button";
import { useGetInterestCount } from "@/hooks/useQueries";
import { Check, Crown } from "lucide-react";
import { motion } from "motion/react";

const plans = [
  {
    id: "free",
    name: "Free",
    price: "₹0",
    period: "forever",
    description: "Begin your transformation",
    features: [
      "3 basic outfit recommendations",
      "AI style quiz",
      "Basic wardrobe guidance",
      "Email support",
    ],
    cta: "Start Free",
    ocid: "pricing.free_button",
    highlight: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "₹499",
    period: "per month",
    description: "The complete gentleman's toolkit",
    features: [
      "Unlimited outfit plans",
      "Personal wardrobe builder",
      "Seasonal style updates",
      "Affiliate shopping links",
      "Priority email support",
    ],
    cta: "Go Pro",
    ocid: "pricing.pro_button",
    highlight: true,
    badge: "Most Popular",
  },
  {
    id: "elite",
    name: "Elite",
    price: "₹1,999",
    period: "per month",
    description: "White-glove styling service",
    features: [
      "Everything in Pro",
      "1:1 video stylist sessions",
      "Personal shopping service",
      "Exclusive members club",
      "24/7 WhatsApp support",
    ],
    cta: "Join Elite",
    ocid: "pricing.elite_button",
    highlight: false,
  },
];

export default function PricingSection() {
  const { data: interestCount } = useGetInterestCount();
  const spotsLeft = Math.max(10 - Number(interestCount ?? 0), 0);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-32 bg-navy relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, oklch(0.97 0.008 85) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-gold font-semibold tracking-[0.3em] uppercase text-sm mb-4">
            Investment
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">
            Choose Your Path
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="font-serif text-xl text-cream/60 max-w-xl mx-auto">
            Every gentleman's journey starts somewhere. Begin today.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col ${
                plan.highlight
                  ? "bg-gold border border-gold/20"
                  : "bg-cream/5 border border-cream/10 hover:border-cream/25"
              } transition-all duration-300`}
              style={
                plan.highlight
                  ? {
                      backgroundColor: "oklch(0.72 0.12 68 / 0.08)",
                      borderColor: "oklch(0.72 0.12 68 / 0.4)",
                    }
                  : {}
              }
            >
              {/* Popular badge */}
              {plan.badge && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 flex items-center gap-1.5"
                  style={{ backgroundColor: "oklch(0.72 0.12 68)" }}
                >
                  <Crown className="w-3 h-3 text-navy" />
                  <span className="text-navy font-bold text-xs tracking-wider uppercase">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                {/* Plan name */}
                <p className="text-cream/60 font-semibold tracking-[0.25em] uppercase text-xs mb-3">
                  {plan.name}
                </p>
                <p className="font-serif text-cream/50 text-base mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <span className="font-display text-5xl font-bold text-cream">
                    {plan.price}
                  </span>
                  <span className="text-cream/50 font-serif text-lg ml-2">
                    /{plan.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-10 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: "oklch(0.72 0.12 68)" }}
                      />
                      <span className="font-serif text-cream/70 text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  data-ocid={plan.ocid}
                  size="lg"
                  onClick={() => handleScroll("#contact")}
                  className={`w-full font-bold rounded-sm tracking-wide py-6 ${
                    plan.highlight
                      ? "text-navy"
                      : "bg-transparent border border-cream/30 text-cream hover:bg-cream/10"
                  }`}
                  style={
                    plan.highlight
                      ? {
                          backgroundColor: "oklch(0.72 0.12 68)",
                          color: "oklch(0.13 0.015 250)",
                        }
                      : {}
                  }
                  variant={plan.highlight ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Founding spots CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 bg-cream/5 border border-cream/15 px-6 py-3">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
              <span className="text-cream/80 font-semibold text-sm tracking-wide">
                Only {spotsLeft > 0 ? spotsLeft : "a few"} founding spots
                remaining
              </span>
            </div>
            <Button
              data-ocid="pricing.primary_button"
              size="lg"
              onClick={() => handleScroll("#contact")}
              style={{
                backgroundColor: "oklch(0.72 0.12 68)",
                color: "oklch(0.13 0.015 250)",
              }}
              className="font-bold px-10 py-6 text-base rounded-sm tracking-wide hover:opacity-90 shadow-elegant"
            >
              Claim Your Founding Spot — Only{" "}
              {spotsLeft > 0 ? spotsLeft : "Few"} Left
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
