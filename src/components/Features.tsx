import { Bot, Calendar, Clock, FileText, MessageSquare, TrendingUp, Users, Stethoscope, Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: MessageSquare,
    title: "Atendimento WhatsApp Automatizado",
    description: "Conversa humanizada e profissional como uma secretária real, com escalonamento inteligente para humanos quando necessário.",
  },
  {
    icon: Calendar,
    title: "Agendamento Inteligente",
    description: "Integração com Google Agenda, confirmação automática e lembretes para pacientes direto na plataforma.",
  },
  {
    icon: Clock,
    title: "Lembretes e Confirmações Automáticas",
    description: "IA envia lembretes e confirmações adaptáveis, reduzindo faltas e melhorando a organização do consultório.",
  },
  {
    icon: Users,
    title: "Gestão de Pacientes Presenciais",
    description: "Registro de chegada, direcionamento e acompanhamento em tempo real da lista de pacientes no consultório.",
  },
  {
    icon: FileText,
    title: "Prontuários Eletrônicos",
    description: "Armazenamento seguro com histórico completo de cada paciente e acesso rápido integrado ao fluxo de atendimento.",
  },
  {
    icon: Bot,
    title: "Agente de IA Personalizado",
    description: "Treinado com protocolos e procedimentos da sua clínica, respondendo dúvidas com precisão e tom de voz adaptado.",
  },
  {
    icon: Stethoscope,
    title: "Gestão Unificada de Pacientes",
    description: "Histórico completo de atendimentos online e presenciais, com visualização centralizada de todos os pontos de contato.",
  },
  {
    icon: TrendingUp,
    title: "Integração WhatsApp Flexível",
    description: "Compatível com API Oficial e não oficial, oferecendo flexibilidade e segurança conforme a necessidade da clínica.",
  },
  {
    icon: Building2,
    title: "Escalabilidade Completa",
    description: "Suporte para múltiplas clínicas e atendentes, crescendo junto com o seu negócio.",
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
