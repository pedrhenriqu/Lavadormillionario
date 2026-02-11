import testimonialImg from "@/assets/testimonial-whatsapp.jpeg";

const statsData = [
  { value: "2.847+", label: "Alunos" },
  { value: "R$10K+", label: "Média Mensal" },
  { value: "97%", label: "Aprovação" },
  { value: "4.9", label: "Avaliação" },
];

const videos = [
  { id: "931800134", title: "Depoimento 1", platform: "vimeo" },
  { id: "896926610", title: "Depoimento 2", platform: "vimeo" },
  { id: "896929241", title: "Depoimento 3", platform: "vimeo" },
  { id: "dLc-2qyB6XI", title: "Depoimento 4", platform: "youtube" },
  { id: "qcyCPX-T024", title: "Depoimento 5", platform: "youtube" },
  { id: "TxFDC2nDdmc", title: "Depoimento 6", platform: "youtube" },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-navy-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Veja alguns <span className="text-gold">RESULTADOS!</span>
          </h2>
          <p className="text-muted-foreground">Depoimentos reais de alunos que transformaram suas vidas</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {videos.map((video) => (
            <div key={video.id} className="rounded-xl overflow-hidden border border-border bg-secondary aspect-video">
              {video.platform === "vimeo" ? (
                <iframe
                  src={`https://player.vimeo.com/video/${video.id}`}
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={video.title}
                />
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={video.title}
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mb-12">
          <img
            src={testimonialImg}
            alt="Resultado de Aluno"
            className="rounded-2xl border-2 border-gold/30 max-w-sm w-full shadow-gold"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {statsData.map((stat) => (
            <div key={stat.label} className="text-center bg-secondary border border-border rounded-xl p-6">
              <p className="text-3xl md:text-4xl font-black text-gold">{stat.value}</p>
              <p className="text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
