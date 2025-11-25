import Hero from "@/components/Hero";
import WhyAttend from "@/components/WhyAttend";
import Program from "@/components/Program";
import Venue from "@/components/Venue";
import Benefits from "@/components/Benefits";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <WhyAttend />
      <Program />
      <Venue />
      <Benefits />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
