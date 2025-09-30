import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Criação do Agente",
    description: "Configuramos sua IA com as informações e processos da sua clínica.",
  },
  {
    number: "02",
    title: "Integração WhatsApp",
    description: "Conectamos o sistema ao WhatsApp Business da sua clínica em minutos.",
  },
  {
    number: "03",
    title: "Treinamento Personalizado",
    description: "A IA aprende a linguagem e protocolos específicos do seu atendimento.",
  },
  {
    number: "04",
    title: "Automação Completa",
    description: "Agendamentos, confirmações, lembretes e atendimento funcionando 24/7.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Como{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Funciona
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simples, rápido e sem complicação
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 mb-8 last:mb-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-medium">
                  {step.number}
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-medium transition-all duration-300">
                  <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center ml-8">
                  <ArrowRight className="text-primary animate-pulse-soft" size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
