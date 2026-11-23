import { Cabecalho } from './components/Cabecalho';
import { Contato, Hero, Produtos, Prova, Rodape, Servicos } from './components/Secoes';

export default function App() {
  return (
    <>
      <Cabecalho />
      <main className="miolo" id="inicio">
        <Hero />
        <Produtos />
        <Servicos />
        <Prova />
        <Contato />
      </main>
      <Rodape />
    </>
  );
}
