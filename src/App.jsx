import Hero from './Hero';
import Navbar from './Navbar';
import About from './About';
import Location from './Location';
import Footer from './Footer';
import AIWhatsAppWidget from './AIWhatsAppWidget';
import dados from './data.json';
import './index.css'; // Importamos o CSS aqui

function App() {
  const siteAtual = dados.pilates;
  const variaveisCSS = {
    '--fundo': siteAtual.tema.fundo,
    '--primaria': siteAtual.tema.primaria,
    '--texto': siteAtual.tema.texto,
    '--bg-image': `url(${siteAtual.hero.fotoFundo})`
  };

  return (
    <div style={variaveisCSS}> 
      <Navbar logo={siteAtual.logoUrl} />
      <Hero conteudo={siteAtual.hero} />
      <About dados={siteAtual.sobre} />
      <Location dados={siteAtual.localizacao} />
      <Footer dados={siteAtual.rodape} logo={siteAtual.logoUrl} />
      <AIWhatsAppWidget telefone={siteAtual.telefone} />
    </div>
  );
}

export default App;