import { MapPin, Wifi, Coffee, Utensils } from "lucide-react";
import venueImage from "@/assets/venue-stage.jpg";

const Venue = () => {
  const amenities = [
    { icon: <Wifi className="w-6 h-6" />, label: "WiFi haut débit" },
    { icon: <Coffee className="w-6 h-6" />, label: "Café & snacks" },
    { icon: <Utensils className="w-6 h-6" />, label: "Déjeuner inclus" },
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4 text-primary">
              <MapPin className="w-6 h-6" />
              <span className="font-semibold text-lg">Le lieu</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stade Maurice David
            </h2>
            
            <p className="text-xl text-muted-foreground mb-6">
              Un espace moderne et dynamique au cœur d'Aix-en-Provence, ancré dans l'écosystème tech local.
            </p>
            
            <div className="space-y-4 mb-8">
              <p className="text-foreground">
                <strong>Provence Rugby</strong><br />
                Aix-en-Provence, France
              </p>
              <p className="text-muted-foreground">
                Accessible en transport en commun, parking disponible sur place.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-2 text-foreground">
                  <div className="text-primary">{amenity.icon}</div>
                  <span>{amenity.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border-2 border-primary shadow-neon-cyan">
              <img 
                src={venueImage} 
                alt="Stade Maurice David - Venue" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
