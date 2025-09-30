import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Simular envio
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    // Limpar formulário
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre o NeoClini", "_blank");
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Entre em{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Contato
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pronto para transformar o atendimento da sua clínica? Fale conosco!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto animate-fade-in-up">
          <Card className="p-8 border-border bg-card">
            <h3 className="text-2xl font-semibold mb-6">Envie uma mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Nome completo *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="E-mail *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Telefone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <Textarea
                  placeholder="Mensagem *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Enviar Mensagem
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 border-border bg-card hover:shadow-medium transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">WhatsApp</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Resposta rápida e direta
                  </p>
                  <Button onClick={handleWhatsApp} variant="outline" size="sm">
                    Iniciar conversa
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border bg-card hover:shadow-medium transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">E-mail</h4>
                  <p className="text-muted-foreground text-sm">
                    contato@neoclini.com.br
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border bg-card hover:shadow-medium transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Telefone</h4>
                  <p className="text-muted-foreground text-sm">
                    (11) 99999-9999
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-primary bg-gradient-to-br from-primary/5 to-secondary/5">
              <h4 className="font-semibold mb-2 text-lg">🎯 Agende uma demonstração</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Veja na prática como o NeoClini funciona e tire todas as suas dúvidas em uma demonstração personalizada.
              </p>
              <Button onClick={handleWhatsApp} variant="cta" size="lg" className="w-full">
                Agendar Demo Gratuita
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
