import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { aplicarTema, temaSalvo } from './lib/tema';
import './styles.css';

aplicarTema(temaSalvo());

createRoot(document.getElementById('raiz')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
