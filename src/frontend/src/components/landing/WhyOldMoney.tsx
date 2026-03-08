import { Palette, Star, Watch } from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  {
    icon: Palette,
    title: "Suits Any Skin Tone",
    description:
      "Neutral colors complement all complexions perfectly. Navy, beige, and white work beautifully in Indian heat — no fading, no washing out.",
    stat: "10+ tones",
    statLabel: "perfectly suited",
  },
  {
    icon: Star,
    title: "Festival-Ready",
    description:
      "Mix your navy blazer with a silk kurta for weddings and Diwali. Old money style bridges Western elegance and Indian tradition effortlessly.",
    stat: "2-in-1",
    statLabel: "western & traditional",
  },
  {
    icon: Watch,
    title: "Instant Upgrade",
    description:
      "Neat hair + a simple leather watch = look 10x richer instantly. The old money formula is about restraint, quality, and confidence.",
    stat: "10×",
    statLabel: "perceived value boost",
  },
];

export default function WhyOldMoney() {
  return (
    <section className="py-32 bg-cream relative overflow-hidden">
      {/* Decorative background element */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/3 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, oklch(0.26 0.065 255) 0px, oklch(0.26 0.065 255) 1px, transparent 1px, transparent 20px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold font-semibold tracking-[0.3em] uppercase text-sm mb-4">
              Why It Works
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
              Why "Old Money" Works for{" "}
              <span className="italic" style={{ color: "oklch(0.72 0.12 68)" }}>
                Indian Men
              </span>
            </h2>
            <div className="w-16 h-px bg-gold mb-8" />
            <p className="font-serif text-xl text-navy/60 leading-relaxed max-w-lg">
              The old money aesthetic isn't about spending more — it's about
              spending smarter. A ₹17,000 wardrobe can make you look like you
              spent ₹1,70,000.
            </p>

            {/* Quote block */}
            <blockquote className="mt-10 pl-6 border-l-2 border-gold">
              <p className="font-serif text-xl italic text-navy/70 leading-relaxed">
                "Dress like the person you want to become, not the person you
                currently are."
              </p>
              <footer className="mt-3 font-semibold text-sm text-navy/40 tracking-wide uppercase">
                — Old Money Principle
              </footer>
            </blockquote>
          </motion.div>

          {/* Right: benefits */}
          <div className="flex flex-col gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="flex gap-6 group"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 border border-navy/15 bg-beige flex items-center justify-center group-hover:border-gold/40 group-hover:bg-gold/5 transition-all duration-300">
                    <Icon className="w-6 h-6 text-navy/70 group-hover:text-gold transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-display text-xl font-bold text-navy">
                        {benefit.title}
                      </h3>
                      <div className="text-right ml-4">
                        <p
                          className="font-display text-2xl font-bold leading-none"
                          style={{ color: "oklch(0.72 0.12 68)" }}
                        >
                          {benefit.stat}
                        </p>
                        <p className="text-xs text-navy/40 uppercase tracking-wide font-semibold mt-1">
                          {benefit.statLabel}
                        </p>
                      </div>
                    </div>
                    <p className="font-serif text-lg text-navy/60 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
