import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, User, Building, MessageSquare } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:benjamin.buleon@gojob.com?subject=Developer AI Xperience - Contact de ${formData.name}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\nEntreprise: ${formData.company}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast.success("Ouverture de votre client email...");
    
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Restons en contact
            </h2>
            <p className="text-xl text-muted-foreground">
              Vous souhaitez participer, sponsoriser ou en savoir plus ? Contactez-nous !
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium mb-2">
                <User className="w-4 h-4 text-primary" />
                Nom complet
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-background border-border focus:border-primary"
                placeholder="Votre nom"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium mb-2">
                <Mail className="w-4 h-4 text-primary" />
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-background border-border focus:border-primary"
                placeholder="votre@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="company" className="flex items-center gap-2 text-sm font-medium mb-2">
                <Building className="w-4 h-4 text-primary" />
                Entreprise
              </label>
              <Input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                className="bg-background border-border focus:border-primary"
                placeholder="Votre entreprise (optionnel)"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium mb-2">
                <MessageSquare className="w-4 h-4 text-primary" />
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="bg-background border-border focus:border-primary"
                placeholder="Parlez-nous de votre projet ou de vos questions..."
              />
            </div>
            
            <Button type="submit" variant="hero" size="lg" className="w-full">
              Envoyer le message
            </Button>
          </form>
          
          <div className="mt-8 text-center text-muted-foreground">
            <p>Vous pouvez aussi nous contacter directement à :</p>
            <a 
              href="mailto:benjamin.buleon@gojob.com" 
              className="text-primary hover:text-secondary transition-colors font-medium"
            >
              benjamin.buleon@gojob.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
