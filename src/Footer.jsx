export default function Footer({ dados, logo }) {
  if (!dados) return null;

  return (
    <footer className="footer-premium">
      <div className="footer-content">
        
        {/* Coluna 1: Marca e Descrição */}
        <div className="footer-brand">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p>{dados.descricao}</p>
        </div>
        
        {/* Coluna 2: Navegação Rápida */}
        <div className="footer-links">
          <h3>Navegação</h3>
          <a href="#inicio">Início</a>
          <a href="#studio">O Studio</a>
          <a href="#contato">Localização</a>
        </div>
        
        {/* Coluna 3: Redes e Contato */}
        <div className="footer-social">
          <h3>Conecte-se</h3>
          {dados.redesSociais.map((rede, index) => (
            <a key={index} href={rede.url} target="_blank" rel="noreferrer">
              {rede.nome}
            </a>
          ))}
        </div>
        
      </div>

      {/* Linha Final: Direitos e Assinatura */}
      <div className="footer-bottom">
        <p>{dados.direitos}</p>
        <p className="agencia-assinatura">
          Desenvolvido por <strong>Thales Soares</strong>
        </p>
      </div>
    </footer>
  );
}