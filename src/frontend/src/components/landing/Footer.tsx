import { Button } from "@/components/ui/button";
import { Heart, MapPin, MessageCircle, Shield } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  const year = new Date().getFullYear();
  const waLink = "https://wa.me/9801090166";

  return (
    <footer className="bg-cream border-t border-beige-dark">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-navy flex items-center justify-center">
                <span className="text-cream font-display text-sm font-bold">
                  OM
                </span>
              </div>
              <span className="font-display text-xl font-bold text-navy">
                Old Money AI
              </span>
            </div>
            <p className="font-serif text-navy/60 text-base leading-relaxed mb-6">
              AI + Human Stylists turning Indian men (18–40) into old money
              gentlemen. Effortlessly elite, authentically Indian.
            </p>
            <Button
              data-ocid="footer.link"
              asChild
              className="bg-navy text-cream hover:bg-navy/90 rounded-sm font-semibold tracking-wide flex items-center gap-2 w-fit px-5 py-2.5"
            >
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-display font-bold text-navy text-base mb-5 tracking-wide">
              About
            </h4>
            <div className="flex flex-col gap-3">
              {[
                {
                  icon: MapPin,
                  text: "Lucknow, Uttar Pradesh, India",
                },
                {
                  icon: Shield,
                  text: "Privacy-first — your data stays yours",
                },
                {
                  icon: Heart,
                  text: "Partners: Myntra Affiliates, Local Stylists",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex items-start gap-3">
                    <Icon className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    <span className="font-serif text-navy/60 text-sm">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold text-navy text-base mb-5 tracking-wide">
              Navigate
            </h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "How It Works", href: "#how-it-works" },
                { label: "Catalog", href: "#catalog" },
                { label: "Pricing", href: "#pricing" },
                { label: "Investors", href: "#investors" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid="footer.link"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.querySelector(link.href);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="font-serif text-navy/60 hover:text-gold text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-beige-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-serif text-navy/50 text-sm text-center sm:text-left">
            © {year} Old Money AI. All rights reserved.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-serif text-navy/40 text-sm"
          >
            Built with <Heart className="w-3 h-3 inline text-gold" /> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.hostname : "",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors underline"
            >
              caffeine.ai
            </a>
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
