import logo from "@/assets/logo-neoclini.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <img src={logo} alt="NeoClini" className="h-10 w-auto" />
            <p className="text-muted-foreground text-sm">
              Automatize o atendimento da sua clínica com IA humanizada via WhatsApp.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button onClick={() => scrollToSection("home")} className="hover:text-primary transition-colors">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("features")} className="hover:text-primary transition-colors">
                  Funcionalidades
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("how-it-works")} className="hover:text-primary transition-colors">
                  Como Funciona
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("pricing")} className="hover:text-primary transition-colors">
                  Planos
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Carreiras
                </a>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="hover:text-primary transition-colors">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  LGPD
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} NeoClini. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
