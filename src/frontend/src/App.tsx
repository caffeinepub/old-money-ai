import CatalogSection from "@/components/landing/CatalogSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/HowItWorks";
import InvestorSection from "@/components/landing/InvestorSection";
import Navbar from "@/components/landing/Navbar";
import PricingSection from "@/components/landing/PricingSection";
import WhatsAppTemplates from "@/components/landing/WhatsAppTemplates";
import WhyOldMoney from "@/components/landing/WhyOldMoney";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-navy overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <CatalogSection />
        <WhyOldMoney />
        <PricingSection />
        <InvestorSection />
        <WhatsAppTemplates />
        <ContactSection />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
