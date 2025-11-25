import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tech.jpg";
import { Calendar, MapPin, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="animate-float">
          <div className="inline-block mb-6 px-6 py-2 rounded-full bg-gradient-primary text-background font-semibold text-sm">
            Nouvelle conférence tech à Aix-Marseille
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-pulse-glow">
          Developer AI Xperience
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          Marseille 2025
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="font-medium">Mi/Fin Septembre</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-secondary" />
            <span className="font-medium">Stade Maurice David, Aix-en-Provence</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-accent" />
            <span className="font-medium">200 Participants</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" asChild>
            <a href="#contact">Réserver ma place</a>
          </Button>
          <Button variant="neon" size="xl" asChild>
            <a href="#programme">Découvrir le programme</a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
