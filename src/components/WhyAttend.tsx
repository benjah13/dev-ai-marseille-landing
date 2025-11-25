import { Code2, Sparkles, Rocket, Network } from "lucide-react";
import aiVisual from "@/assets/ai-visual.jpg";

const WhyAttend = () => {
  const reasons = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Technologies de pointe",
      description: "Découvrez les dernières innovations en IA, développement logiciel et outils émergents."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Expériences pratiques",
      description: "Ateliers concrets, retours d'expérience et cas d'usage réels directement applicables."
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Networking qualifié",
      description: "Rencontrez 200+ développeurs, experts et leaders tech de la région sud-est."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Opportunités de carrière",
      description: "Accédez à des opportunités de recrutement et boostez votre visibilité."
    }
  ];

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div 
        className="absolute right-0 top-0 w-1/3 h-full opacity-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${aiVisual})` }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pourquoi participer ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une expérience unique dédiée aux développeurs passionnés par l'innovation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl bg-background border border-border hover:border-primary transition-all hover:shadow-neon-cyan"
            >
              <div className="mb-4 text-primary group-hover:text-secondary transition-colors">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
