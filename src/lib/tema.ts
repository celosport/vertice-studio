/**
 * Identidades visuais. Cada uma é só um bloco de variáveis em styles.css (`[data-tema="..."]`).
 * Para criar uma nova (a próxima moda), acrescente aqui e copie um bloco de variáveis no CSS.
 */
export const TEMAS = [
  { id: 'corp', rotulo: 'Corporativo' },
  { id: 'claro', rotulo: 'Claro' },
  { id: 'miami', rotulo: 'Neon Miami' },
] as const;

export type TemaId = (typeof TEMAS)[number]['id'];

export const TEMA_PADRAO: TemaId = 'corp';
const CHAVE = 'vertice-tema';

export function lerTema(valor: string | null | undefined): TemaId {
  return TEMAS.some((t) => t.id === valor) ? (valor as TemaId) : TEMA_PADRAO;
}

export function temaSalvo(): TemaId {
  try {
    return lerTema(localStorage.getItem(CHAVE));
  } catch {
    return TEMA_PADRAO;
  }
}

export function aplicarTema(id: TemaId): void {
  if (id === TEMA_PADRAO) document.documentElement.removeAttribute('data-tema');
  else document.documentElement.setAttribute('data-tema', id);
  try {
    localStorage.setItem(CHAVE, id);
  } catch {
    /* sem armazenamento: vale só nesta visita */
  }
}
