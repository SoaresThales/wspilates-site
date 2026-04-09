export default function Hero({ conteudo }) {
  return (
    <section id="inicio" className="hero">
      <h1>{conteudo.titulo}</h1>
      <p>{conteudo.subtitulo}</p>
      <button className="btn-agendar">
        {conteudo.botaoTexto || "Agendar Agora"}
      </button>
      
      <div className="carrossel">
        {/* Mapeamento das fotos aqui... */}
      </div>
    </section>
  );
}