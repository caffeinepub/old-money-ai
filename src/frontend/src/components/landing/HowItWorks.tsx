import { Camera, ShoppingBag, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    icon: Camera,
    number: "01",
    title: "Upload Your Photo",
    description:
      "Submit a portrait and complete our discreet 5-minute questionnaire. Share your lifestyle, proportions, budget, and aspirations.",
    accent: "Camera",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "AI Magic",
    description:
      "Receive a curated ensemble — navy blazer, cream Oxford, pressed chinos, Derby shoes. Our AI enforces old money principles: neutrals, impeccable fit, zero logos.",
    accent: "AI",
  },
  {
    icon: ShoppingBag,
    number: "03",
    title: "Shop & Transform",
    description:
      "Acquire each piece via Myntra, Zara, or Allen Solly with a single click. Engage our Premium tier for a personal stylist consultation to refine every detail.",
    accent: "Shop",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-32 bg-navy relative overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, oklch(0.97 0.008 85) 0px, oklch(0.97 0.008 85) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, oklch(0.97 0.008 85) 0px, oklch(0.97 0.008 85) 1px, transparent 1px, transparent 60px)",
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
            The Method
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6 gold-rule inline-block pb-6">
            How It Works
          </h2>
          <p className="font-serif text-xl text-cream/60 max-w-2xl mx-auto mt-8">
            Three refined steps from ordinary to extraordinary
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-3 gap-px bg-gold/8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                data-ocid={`how-it-works.item.${index + 1}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-navy p-10 lg:p-12 group hover:bg-navy/80 transition-colors duration-500 border border-cream/5"
              >
                {/* Step number */}
                <div className="flex items-start justify-between mb-8">
                  <span
                    className="font-display text-6xl font-bold italic leading-none"
                    style={{ color: "oklch(0.72 0.12 68 / 0.12)" }}
                  >
                    {step.number}
                  </span>
                  <div className="w-12 h-12 border border-gold/30 flex items-center justify-center group-hover:border-gold/60 transition-colors">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl font-semibold italic text-cream mb-4">
                  {step.title}
                </h3>
                <p className="font-serif text-lg text-cream/60 leading-relaxed">
                  {step.description}
                </p>

                {/* Bottom accent line */}
                <div className="mt-8 w-12 h-px bg-gold/30 group-hover:w-20 group-hover:bg-gold/60 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
