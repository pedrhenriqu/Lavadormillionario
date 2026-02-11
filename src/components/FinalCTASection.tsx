import { ArrowRight, Zap } from "lucide-react";

const CHECKOUT_URL = "https://pay.kiwify.com.br/MPz6JS7?afid=IPBBrNj7";

const FinalCTASection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-navy-light">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Sua vida pode mudar <span className="text-gold">AGORA</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          Daqui a 30 dias você pode estar no mesmo lugar... ou faturando seus primeiros milhares
          de reais como Lavador Profissional. A escolha é sua.
        </p>

        <a
          href={CHECKOUT_URL}
          className="inline-flex items-center gap-3 gradient-gold text-primary-foreground font-bold text-lg md:text-xl px-10 py-5 rounded-full shadow-gold hover:scale-105 transition-transform duration-300"
        >
          QUERO TRANSFORMAR MINHA VIDA
          <ArrowRight className="w-6 h-6" />
        </a>

        <p className="mt-6 flex items-center justify-center gap-2 text-muted-foreground text-sm">
          <Zap className="w-4 h-4 text-gold" />
          Acesso imediato após a confirmação do pagamento
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
