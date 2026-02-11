import CountdownBar from "@/components/CountdownBar";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import InstructorSection from "@/components/InstructorSection";
import ForWhoSection from "@/components/ForWhoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CourseContentSection from "@/components/CourseContentSection";
import BonusSection from "@/components/BonusSection";
import PricingSection from "@/components/PricingSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CountdownBar />
      <HeroSection />
      <PainPointsSection />
      <InstructorSection />
      <ForWhoSection />
      <TestimonialsSection />
      <CourseContentSection />
      <BonusSection />
      <PricingSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
