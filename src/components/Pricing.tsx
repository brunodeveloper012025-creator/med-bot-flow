import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "R$ 297",
    period: "/mês",
    description: "Ideal para clínicas em crescimento",
    features: [
      "Até 500 conversas/mês",
      "Agendamentos automáticos",
      "Confirmações e lembretes",
      "WhatsApp Business",
      "Suporte por email",
    ],
    highlighted: false,
  },
  {
    name: "Profissional",
    price: "R$ 597",
    period: "/mês",
    description: "Mais popular entre clínicas médias",
    features: [
      "Até 2000 conversas/mês",
      "Todos os recursos do Básico",
      "Escalonamento inteligente",
      "Relatórios detalhados",
      "Suporte prioritário",
      "Treinamento personalizado",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Customizado",
    period: "",
    description: "Para clínicas com alto volume",
    features: [
      "Conversas ilimitadas",
      "Todos os recursos do Profissional",
      "Múltiplas unidades",
      "Integração com sistemas",
      "Gerente de conta dedicado",
      "SLA garantido",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Planos para{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Cada Necessidade
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para o tamanho da sua clínica
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fade-in-up">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative ${
                plan.highlighted
                  ? "border-2 border-primary shadow-strong scale-105 bg-gradient-to-b from-card to-primary/5"
                  : "border border-border bg-card"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Mais Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <Check className="text-accent flex-shrink-0 mt-1" size={18} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={scrollToContact}
                variant={plan.highlighted ? "hero" : "outline"}
                className="w-full"
                size="lg"
              >
                Começar Agora
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Tem dúvidas sobre qual plano escolher?
          </p>
          <Button onClick={scrollToContact} variant="ghost" size="lg">
            Fale com nossa equipe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
