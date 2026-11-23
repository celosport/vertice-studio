import { useState } from 'react';
import { site } from '../data/site';
import { TEMAS, aplicarTema, temaSalvo, type TemaId } from '../lib/tema';
import { Logo } from './Logo';

export function Cabecalho() {
  const [tema, setTema] = useState<TemaId>(temaSalvo);

  function escolher(id: TemaId) {
    setTema(id);
    aplicarTema(id);
  }

  return (
    <header className="topo">
      <div className="topo-in">
        <a className="marca" href="#inicio" aria-label={`${site.nome} ${site.sufixo}, início`}>
          <Logo />
          <span className="nome">
            {site.nome}
            <small>{site.sufixo.toUpperCase()}</small>
          </span>
        </a>
        <div className="temas" role="group" aria-label="Identidade visual">
          {TEMAS.map((t) => (
            <button key={t.id} type="button" aria-pressed={tema === t.id} onClick={() => escolher(t.id)}>
              {t.rotulo}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
