import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import QualitySection from "@/components/QualitySection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesGrid />
      <QualitySection />
      <ContactSection />
    </div>
  );
};

export default Index;
