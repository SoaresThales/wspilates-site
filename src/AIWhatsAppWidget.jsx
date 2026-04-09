import React from 'react';

export default function AIWhatsAppWidget({ telefone, mensagemInicial }) {
  const linkWhatsapp = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagemInicial)}`;

  return (
    <div style={{
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      zIndex: 1000,
      fontFamily: 'sans-serif'
    }}>
      {/* Balão de notificação da IA */}
      <div style={{
        backgroundColor: 'white',
        padding: '10px 15px',
        borderRadius: '15px 15px 0 15px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        marginBottom: '10px',
        fontSize: '14px',
        color: '#333',
        border: '1px solid #eee'
      }}>
        <strong>Agende sua aula experimental</strong>
      </div>

      {/* Botão Flutuante */}
      <a 
        href={linkWhatsapp}
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          backgroundColor: '#25D366',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
          cursor: 'pointer',
          textDecoration: 'none'
        }}
      >
        <span style={{ fontSize: '30px' }}>💬</span>
      </a>
    </div>
  );
}