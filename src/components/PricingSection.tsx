import { ArrowRight, Shield, Zap, CreditCard, Smartphone, Landmark } from "lucide-react";

const CHECKOUT_URL = "https://pay.kiwify.com.br/MPz6JS7?afid=IPBBrNj7";

const lineItems = [
  { label: "Curso Completo", price: "R$1.997" },
  { label: "Grupo Exclusivo VIP", price: "R$497" },
  { label: "Suporte com Produtos", price: "R$297" },
  { label: "Acesso por 12 Meses", price: "R$397" },
];

const PricingSection = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Quanto vale transformar sua vida?
        </h2>
        <p className="text-muted-foreground mb-10">Investimento único com acesso imediato</p>

        <div className="bg-secondary border border-border rounded-2xl p-8 mb-8">
          <div className="space-y-3 mb-6">
            {lineItems.map((item) => (
              <div key={item.label} className="flex justify-between text-muted-foreground">
                <span>{item.label}</span>
                <span className="line-through">{item.price}</span>
              </div>
            ))}
            <div className="border-t border-border pt-3 flex justify-between font-bold text-foreground">
              <span>Total:</span>
              <span className="line-through">R$3.188</span>
            </div>
          </div>

          <div className="gradient-gold rounded-xl p-6 mb-6">
            <p className="text-primary-foreground/80 text-sm font-semibold mb-1">OFERTA ESPECIAL</p>
            <p className="text-primary-foreground text-sm mb-3">
              Mas somente hoje você terá acesso a tudo isso por apenas:
            </p>
            <p className="text-primary-foreground font-bold text-5xl md:text-6xl mb-1">
              R$ 54,90
            </p>
            <p className="text-primary-foreground/80 text-sm">
              à vista
            </p>
          </div>

          <a
            href={CHECKOUT_URL}
            className="flex items-center justify-center gap-3 bg-green-check text-primary-foreground font-bold text-lg px-8 py-5 rounded-full w-full hover:scale-105 transition-transform duration-300 glow-gold animate-pulse-slow"
            style={{ backgroundColor: "hsl(var(--green-check))" }}
          >
            QUERO MEU ACESSO AGORA
            <ArrowRight className="w-6 h-6" />
          </a>

          <div className="flex items-center justify-center gap-4 mt-6 text-muted-foreground text-sm">
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4" />
              Garantia de 7 dias
            </div>
            <div className="flex items-center gap-1">
              <Zap className="w-4 h-4" />
              Acesso imediato
            </div>
          </div>

          <div className="mt-4 text-muted-foreground text-xs">
            <p className="mb-2">Pagamento 100% seguro</p>
            <div className="flex items-center justify-center gap-4">
              <span className="flex items-center gap-1"><CreditCard className="w-4 h-4" /> Cartão</span>
              <span className="flex items-center gap-1"><Smartphone className="w-4 h-4" /> PIX</span>
              <span className="flex items-center gap-1"><Landmark className="w-4 h-4" /> Boleto</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
