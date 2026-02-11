import { ArrowRight, Shield, Clock, Users } from "lucide-react";
import logo from "@/assets/logo.png";

const CHECKOUT_URL = "https://pay.kiwify.com.br/MPz6JS7?afid=IPBBrNj7";

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 px-4 text-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <img src={logo} alt="Lavador Milionário" className="mx-auto h-28 md:h-40 mb-8" />
        
        <div className="inline-flex items-center gap-2 bg-secondary px-5 py-2 rounded-full mb-8">
          <span className="text-gold">⭐</span>
          <span className="text-muted-foreground text-sm font-medium">+2.847 alunos transformados</span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
          Venha ser um{" "}
          <span className="text-gold">Lavador Profissional</span> de Sucesso e{" "}
          <span className="text-gold underline decoration-gold/50 underline-offset-4">
            Lucre no mínimo R$10.000
          </span>{" "}
          por Mês!
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Aprenda as técnicas mais eficazes para higienização de estofados, limpeza
          pós-obra, limpeza de tapetes e muito mais.{" "}
          <strong className="text-foreground">Conquiste sua independência financeira.</strong>
        </p>

        <a
          href={CHECKOUT_URL}
          className="inline-flex items-center gap-3 gradient-gold text-primary-foreground font-bold text-lg md:text-xl px-10 py-5 rounded-full shadow-gold hover:scale-105 transition-transform duration-300"
        >
          QUERO SER UM LAVADOR DE ALTO NÍVEL
          <ArrowRight className="w-6 h-6" />
        </a>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-10 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-check" />
            Garantia 7 Dias
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-gold" />
            100% Online
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-gold" />
            Suporte VIP
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
