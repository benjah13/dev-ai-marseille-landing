import { Calendar, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Developer AI Xperience
            </h3>
            <p className="text-muted-foreground">
              La nouvelle conférence tech du sud-est dédiée aux développeurs passionnés par l'IA et l'innovation.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Informations</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                Mi/Fin Septembre 2025
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Stade Maurice David, Aix-en-Provence
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                benjamin.buleon@gojob.com
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#programme" className="text-muted-foreground hover:text-primary transition-colors">
                  Programme
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>© 2025 Developer AI Xperience Marseille. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
