import { describe, expect, it } from 'vitest';
import { site } from '../data/site';
import { lerTema } from './tema';
import { linkWhatsApp } from './whatsapp';

describe('linkWhatsApp', () => {
  it('monta o link só com os dígitos e a mensagem codificada', () => {
    expect(linkWhatsApp('+55 (11) 99999-8888', 'Olá! Quero um diagnóstico.')).toBe(
      'https://wa.me/5511999998888?text=Ol%C3%A1!%20Quero%20um%20diagn%C3%B3stico.',
    );
  });
  it('número vazio ou incompleto não gera link', () => {
    expect(linkWhatsApp('', 'x')).toBeNull();
    expect(linkWhatsApp('11 99999', 'x')).toBeNull();
  });
});

describe('lerTema', () => {
  it('aceita só identidades conhecidas', () => {
    expect(lerTema('miami')).toBe('miami');
    expect(lerTema('claro')).toBe('claro');
    expect(lerTema('qualquer')).toBe('corp');
    expect(lerTema(null)).toBe('corp');
  });
});

describe('dados do site', () => {
  it('todo link informado é https', () => {
    const links = site.produtos.flatMap((p) => [p.site, p.demo, p.codigo]).filter((l): l is string => !!l);
    for (const l of [...links, site.prova.github, site.prova.linkedin]) expect(l).toMatch(/^https:\/\//);
  });
  it('o WhatsApp comercial gera um link válido (55 + DDD 21)', () => {
    expect(linkWhatsApp(site.whatsapp, site.mensagemWhatsapp)).toMatch(/^https:\/\/wa\.me\/5521997323765\?text=/);
  });
  it('não há produto sem nome nem descrição', () => {
    for (const p of site.produtos) {
      expect(p.nome.trim()).not.toBe('');
      expect(p.descricao.trim()).not.toBe('');
    }
  });
});
