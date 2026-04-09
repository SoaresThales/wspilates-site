export default function Location({ dados }) {
  const enderecoBusca = encodeURIComponent(dados.endereco);

  return (
    <section id="contato" className="section">
      <h2>{dados.titulo}</h2>
      <p style={{ marginBottom: '30px', opacity: 0.8 }}>{dados.endereco}</p>
      
      <div className="map-wrapper">
        
        <iframe 
          title="Mapa da Localização"
          src={`https://maps.google.com/maps?q=${enderecoBusca}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
          className="mapa-iframe"
          allowFullScreen="" 
          loading="lazy">
        </iframe>
        
      </div>
    </section>
  );
}