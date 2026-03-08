import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useGetInterestCount } from "@/hooks/useQueries";
import { ChevronDown, Crown, Users } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  const { data: interestCount } = useGetInterestCount();

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const displayCount =
    interestCount !== undefined ? Number(interestCount) + 47 : 47;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-gentleman.dim_1200x800.jpg')",
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, oklch(0.10 0.04 255 / 0.88) 0%, oklch(0.14 0.05 255 / 0.80) 40%, oklch(0.18 0.06 255 / 0.60) 100%)",
        }}
      />

      {/* Decorative vertical rule */}
      <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-3xl">
          {/* Live interest badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-4 py-1.5">
              <Users className="w-3.5 h-3.5 text-gold" />
              <span className="text-cream/90 text-xs font-semibold tracking-wider uppercase">
                {displayCount}+ gentlemen interested
              </span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-[1.05] mb-6"
          >
            AI + Stylists Turn You Into an{" "}
            <span className="italic" style={{ color: "oklch(0.84 0.10 68)" }}>
              Old Money
            </span>{" "}
            Gentleman
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif text-xl md:text-2xl text-cream/80 leading-relaxed mb-10 max-w-2xl"
          >
            Tired of random clothes that don't make you look rich and classy?
            Get your perfect old money transformation plan — tailored outfits,
            grooming tips, and shoppable looks for office, dates, or college.
          </motion.p>

          {/* Founding badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-4 py-2 mb-8"
          >
            <Crown className="w-3.5 h-3.5 text-gold" />
            <span className="text-cream text-xs font-semibold tracking-wide">
              First 10 Founding Gentlemen get 30-min stylist call + lifetime 20%
              off
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              data-ocid="hero.primary_button"
              size="lg"
              onClick={() => handleScroll("#contact")}
              className="bg-gold text-navy hover:bg-gold-light font-bold px-8 py-6 text-base rounded-sm tracking-wide shadow-elegant"
              style={{ backgroundColor: "oklch(0.72 0.12 68)" }}
            >
              Get Your Free Style Quiz
            </Button>
            <Button
              data-ocid="hero.secondary_button"
              size="lg"
              variant="outline"
              onClick={() => handleScroll("#pricing")}
              className="border-cream/60 text-cream hover:bg-white/10 font-semibold px-8 py-6 text-base rounded-sm tracking-wide backdrop-blur-sm"
            >
              Join First 10 — Limited Spots
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => handleScroll("#how-it-works")}
      >
        <span className="text-cream/50 text-xs tracking-widest uppercase font-semibold">
          Discover
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-5 h-5 text-cream/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
