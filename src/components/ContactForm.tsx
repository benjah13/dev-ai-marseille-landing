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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const webhookUrl = import.meta.env.VITE_SLACK_WEBHOOK_URL;

    if (!webhookUrl) {
      toast.error("Configuration manquante. Veuillez contacter l'administrateur.");
      setIsSubmitting(false);
      return;
    }

    try {
      const slackMessage = {
        text: "Nouveau message de contact - Developer AI Xperience",
        blocks: [
          {
            type: "header",
            text: {
              type: "plain_text",
              text: "Nouveau message de contact"
            }
          },
          {
            type: "section",
            fields: [
              {
                type: "mrkdwn",
                text: `*Nom:*\n${formData.name}`
              },
              {
                type: "mrkdwn",
                text: `*Email:*\n${formData.email}`
              },
              {
                type: "mrkdwn",
                text: `*Entreprise:*\n${formData.company || "Non renseigné"}`
              }
            ]
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `*Message:*\n${formData.message}`
            }
          }
        ]
      };

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(slackMessage),
      });

      if (response.ok) {
        toast.success("Message envoyé avec succès !");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      toast.error("Erreur lors de l'envoi du message. Veuillez réessayer.");
      console.error("Error sending to Slack:", error);
    } finally {
      setIsSubmitting(false);
    }
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
            
            <Button 
              type="submit" 
              variant="hero" 
              size="lg" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
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
