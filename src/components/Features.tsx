import { Bot, Calendar, Clock, Heart, MessageSquare, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Bot,
    title: "IA Humanizada",
    description: "Atendimento natural e empático que seus pacientes não vão perceber que é IA.",
  },
  {
    icon: Calendar,
    title: "Agendamentos Automáticos",
    description: "Sistema inteligente que agenda, confirma e envia lembretes automaticamente.",
  },
  {
    icon: Clock,
    title: "Disponível 24/7",
    description: "Seu agente virtual trabalha dia e noite, sem descanso ou feriados.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Integrado",
    description: "Atendimento direto no aplicativo favorito dos seus pacientes.",
  },
  {
    icon: TrendingUp,
    title: "Escalonamento Inteligente",
    description: "Passa automaticamente para humano quando necessário.",
  },
  {
    icon: Heart,
    title: "Treinamento Personalizado",
    description: "Configuramos a IA com a linguagem e processos da sua clínica.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Funcionalidades que{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Transformam
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo que sua clínica precisa para oferecer um atendimento excepcional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border bg-card"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
