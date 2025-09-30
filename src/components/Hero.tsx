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
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              🚀 Transforme o atendimento da sua clínica
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Automação Inteligente para{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Clínicas Médicas
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Atendimento 24/7 com IA humanizada via WhatsApp. Agendamentos automáticos, confirmações e lembretes que seus pacientes vão adorar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToContact} variant="hero" size="xl" className="group">
                Solicitar Demonstração
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={scrollToContact} variant="outline" size="xl">
                <MessageCircle className="mr-2" />
                Falar no WhatsApp
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background" />
                  <div className="w-8 h-8 rounded-full bg-secondary/20 border-2 border-background" />
                  <div className="w-8 h-8 rounded-full bg-accent/20 border-2 border-background" />
                </div>
                <span className="text-sm text-muted-foreground">+100 clínicas atendidas</span>
              </div>
              <div className="text-sm text-muted-foreground">
                ⭐ 4.9/5 de satisfação
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl" />
            <img
              src={heroImage}
              alt="Profissional de saúde usando automação WhatsApp"
              className="relative rounded-2xl shadow-strong w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
