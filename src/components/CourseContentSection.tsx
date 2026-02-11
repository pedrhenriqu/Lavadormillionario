import { Sparkles, Sofa, Dog, Droplets, Layers, GlassWater, Handshake, Calculator } from "lucide-react";

const modules = [
  { icon: Sparkles, title: "Limpeza Pós-Obra", desc: "Técnicas profissionais para limpeza pesada" },
  { icon: Sofa, title: "Higienização de Estofados", desc: "Sofás, cadeiras e poltronas como novos" },
  { icon: Dog, title: "Higienização de Pelúcia", desc: "Técnica exclusiva para bichos de pelúcia" },
  { icon: Droplets, title: "Limpeza de Tapetes e Carpetes", desc: "Remoção de manchas e odores" },
  { icon: Layers, title: "Limpeza de Pisos Rústicos", desc: "Pedras, cerâmicas e revestimentos" },
  { icon: GlassWater, title: "Limpeza de Porcelanato", desc: "Brilho e proteção profissional" },
  { icon: Handshake, title: "Como Fechar Serviços Maiores", desc: "Técnicas de vendas e negociação" },
  { icon: Calculator, title: "Precificação Lucrativa", desc: "Quanto cobrar para lucrar mais" },
];

const CourseContentSection = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          O que você vai <span className="text-gold">DOMINAR</span>
        </h2>
        <p className="text-muted-foreground mb-12">
          Conteúdo completo para você se tornar um profissional de elite
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {modules.map((mod) => (
            <div
              key={mod.title}
              className="bg-secondary border border-border rounded-xl p-6 hover:border-gold/40 transition-all hover:-translate-y-1 duration-300 text-left"
            >
              <mod.icon className="w-10 h-10 text-gold mb-3" />
              <h3 className="font-bold mb-1">{mod.title}</h3>
              <p className="text-muted-foreground text-sm">{mod.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseContentSection;
