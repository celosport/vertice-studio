import { useId } from 'react';

/** Hexágono com um "V" e o ponto brilhante no vértice. As cores vêm do tema (--g1, --g2, --acento). */
export function Logo({ tamanho = 40 }: { tamanho?: number }) {
  const id = useId();
  return (
    <svg viewBox="0 0 64 64" width={tamanho} height={tamanho} aria-hidden="true" className="logo-marca">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" style={{ stopColor: 'var(--g1)' }} />
          <stop offset="1" style={{ stopColor: 'var(--g2)' }} />
        </linearGradient>
      </defs>
      <path d="M32 4 56 18v28L32 60 8 46V18Z" fill="none" stroke={`url(#${id})`} strokeWidth="3.2" strokeLinejoin="round" />
      <path d="M19 21 32 45 45 21" fill="none" stroke={`url(#${id})`} strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="32" cy="45" r="4.2" style={{ fill: 'var(--acento)' }} />
    </svg>
  );
}
