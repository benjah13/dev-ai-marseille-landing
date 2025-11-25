import { Building2, Users2, Trophy, TrendingUp } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Users2 className="w-10 h-10" />,
      title: "Recrutement de talents",
      description: "Accédez à un vivier de développeurs qualifiés et passionnés de la région."
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      title: "Visibilité marque employeur",
      description: "Renforcez votre image auprès de la communauté tech locale."
    },
    {
      icon: <Trophy className="w-10 h-10" />,
      title: "Leadership tech",
      description: "Positionnez votre entreprise comme acteur innovant du territoire."
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Networking stratégique",
      description: "Créez des partenariats durables avec l'écosystème tech régional."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pourquoi sponsoriser ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une opportunité unique de vous connecter avec la communauté tech du sud-est
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-card border border-border hover:border-secondary transition-all group"
            >
              <div className="mb-4 text-secondary group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-accent text-background">
            <h3 className="text-2xl font-bold mb-2">Devenez partenaire</h3>
            <p className="text-lg opacity-90 mb-4">
              Packages de sponsoring disponibles dès maintenant
            </p>
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-background text-foreground rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
