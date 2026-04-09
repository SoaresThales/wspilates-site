import React, { useState, useEffect, useCallback } from 'react';

export default function About({ dados }) {
  const [fotoAtual, setFotoAtual] = useState(0);
  const carrossel = dados?.carrossel || [];

  const proximaFoto = useCallback(() => {
    setFotoAtual((atual) => (atual === carrossel.length - 1 ? 0 : atual + 1));
  }, [carrossel.length]);

  const fotoAnterior = useCallback(() => {
    setFotoAtual((atual) => (atual === 0 ? carrossel.length - 1 : atual - 1));
  }, [carrossel.length]);

  useEffect(() => {
    const lidarComTeclado = (evento) => {
      if (evento.key === 'ArrowRight') proximaFoto();
      if (evento.key === 'ArrowLeft') fotoAnterior();
    };
    
    window.addEventListener('keydown', lidarComTeclado);
    
    return () => window.removeEventListener('keydown', lidarComTeclado);
  }, [proximaFoto, fotoAnterior]);

  return (
    <section id="studio" className="section">
      <h2>{dados.titulo}</h2>
      
      {carrossel.length > 0 && (
        <div className="galeria-avancada">
          
          <div className="foto-destaque-container">
            <button className="btn-seta esquerda" onClick={fotoAnterior}>
              &#10094;
            </button>
            
            <img 
              src={carrossel[fotoAtual]} 
              alt={`Ambiente ${fotoAtual + 1}`} 
              className="foto-destaque" 
            />
            
            <button className="btn-seta direita" onClick={proximaFoto}>
              &#10095;
            </button>
          </div>

          <div className="miniaturas-container">
            {carrossel.map((img, index) => (
              <img 
                key={index}
                src={img}
                alt={`Miniatura ${index + 1}`}
                className={`miniatura ${index === fotoAtual ? 'ativa' : ''}`}
                onClick={() => setFotoAtual(index)}
              />
            ))}
          </div>

        </div>
      )}

      <p>{dados.texto}</p>
    </section>
  );
}