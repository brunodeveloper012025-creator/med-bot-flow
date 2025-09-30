import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20">
              🚀 Transforme o atendimento da sua clínica
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Automação Inteligente para{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Clínicas Médicas
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Atendimento 24/7 com IA humanizada via WhatsApp. Agendamentos automáticos, confirmações e lembretes que seus pacientes vão adorar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={scrollToContact} variant="hero" size="xl" className="group">
                Solicitar Demonstração
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={scrollToContact} variant="outline" size="xl" className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20">
                <MessageCircle className="mr-2" />
                Falar no WhatsApp
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary/40 backdrop-blur-sm border-2 border-white/30" />
                  <div className="w-8 h-8 rounded-full bg-secondary/40 backdrop-blur-sm border-2 border-white/30" />
                  <div className="w-8 h-8 rounded-full bg-accent/40 backdrop-blur-sm border-2 border-white/30" />
                </div>
                <span className="text-sm text-white/90">+100 clínicas atendidas</span>
              </div>
              <div className="text-sm text-white/90">
                ⭐ 4.9/5 de satisfação
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
