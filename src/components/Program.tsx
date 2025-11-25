import { Brain, Code, Layers } from "lucide-react";

const Program = () => {
  const tracks = [
    {
      icon: <Brain className="w-10 h-10" />,
      title: "AI Engineering",
      color: "border-primary shadow-neon-cyan",
      topics: [
        "LLMs et modèles génératifs",
        "MLOps et déploiement de modèles",
        "RAG et agents intelligents",
        "Éthique et gouvernance de l'IA"
      ]
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Modern Development",
      color: "border-secondary shadow-neon-purple",
      topics: [
        "Architecture frontend moderne",
        "Backend scalable et APIs",
        "DevOps et CI/CD",
        "Tests et qualité de code"
      ]
    },
    {
      icon: <Layers className="w-10 h-10" />,
      title: "Innovation & Produit",
      color: "border-accent",
      topics: [
        "Design systems et UX",
        "Product management tech",
        "Web3 et technologies émergentes",
        "Retours d'expérience startup"
      ]
    }
  ];

  return (
    <section id="programme" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Programme de la journée
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            3 tracks en parallèle • ~20 speakers • Ateliers pratiques • Networking
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {tracks.map((track, index) => (
            <div 
              key={index}
              className={`p-8 rounded-xl bg-card border-2 ${track.color} hover:scale-105 transition-all`}
            >
              <div className="mb-6 text-primary">
                {track.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6">{track.title}</h3>
              <ul className="space-y-3">
                {track.topics.map((topic, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span className="text-muted-foreground">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center p-8 rounded-xl bg-gradient-primary text-background">
          <h3 className="text-2xl font-bold mb-2">Programme détaillé bientôt disponible</h3>
          <p className="text-lg opacity-90">Suivez-nous pour être informé des speakers et sessions confirmés</p>
        </div>
      </div>
    </section>
  );
};

export default Program;
