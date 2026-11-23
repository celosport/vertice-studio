import { site } from '../data/site';
import { linkWhatsApp } from '../lib/whatsapp';

const zap = linkWhatsApp(site.whatsapp, site.mensagemWhatsapp);

export function Hero() {
  const [antes, destaque, depois] = site.hero.titulo;
  return (
    <section className="hero">
      <div className="hero-fundo" aria-hidden="true">
        <div className="grade" />
        <div className="sol" />
        <div className="piso" />
      </div>
      <p className="selo">{site.hero.selo}</p>
      <h1>
        {antes}
        <em>{destaque}</em>
        {depois}
      </h1>
      <p className="sub">{site.hero.subtitulo}</p>
      <a className="botao" href={zap ?? '#contato'} {...(zap ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {site.hero.chamada}
      </a>
    </section>
  );
}

export function Produtos() {
  return (
    <section className="bloco" aria-labelledby="t-produtos">
      <p className="rotulo">Produtos</p>
      <h2 id="t-produtos">Sistemas que já estão no ar</h2>
      <p className="intro">Cada produto nasceu de um problema real e hoje funciona como caso de engenharia da casa.</p>
      <div className="grid">
        {site.produtos.map((p) => (
          <article className="card" key={p.nome}>
            <h3>{p.nome}</h3>
            <p>{p.descricao}</p>
            <span className="etiqueta">{p.etiqueta}</span>
            <div className="links">
              {p.site && <Externo href={p.site}>Visitar</Externo>}
              {p.demo && <Externo href={p.demo}>Ver demo</Externo>}
              {p.codigo && <Externo href={p.codigo}>Código</Externo>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Servicos() {
  return (
    <section className="bloco" aria-labelledby="t-servicos">
      <p className="rotulo">Serviços</p>
      <h2 id="t-servicos">Automação sob demanda, pensada na sua dor</h2>
      <div className="grid">
        {site.servicos.map((s) => (
          <article className="card pacote" key={s.titulo}>
            <h3>{s.titulo}</h3>
            <p className="dor">{s.dor}</p>
            <p>{s.descricao}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Prova() {
  const p = site.prova;
  return (
    <section className="bloco" aria-labelledby="t-prova">
      <p className="rotulo">Quem constrói</p>
      <h2 id="t-prova">Engenharia feita com método</h2>
      <div className="prova">
        <div className="bio">
          <h3>{p.nome}</h3>
          <p className="cargo">{p.cargo}</p>
          <p>{p.resumo}</p>
        </div>
        <ul>
          {p.pontos.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Contato() {
  return (
    <section className="bloco" id="contato" aria-labelledby="t-contato">
      <p className="rotulo">Contato</p>
      <h2 id="t-contato">Vamos conversar sobre a sua operação</h2>
      <p className="intro">Um diagnóstico rápido mostra onde está o trabalho manual que mais custa.</p>
      {zap ? (
        <a className="botao" href={zap} target="_blank" rel="noopener noreferrer">
          Chamar no WhatsApp
        </a>
      ) : (
        <span className="numero">WhatsApp comercial: em breve</span>
      )}
      {site.email && (
        <p className="intro">
          Ou escreva para <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      )}
    </section>
  );
}

export function Rodape() {
  return (
    <footer>
      <div className="miolo">
        © {new Date().getFullYear()} {site.nome} {site.sufixo}
      </div>
    </footer>
  );
}

function Externo({ href, children }: { href: string; children: string }) {
  return (
    <a className="link" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
