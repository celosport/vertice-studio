/** Link do WhatsApp (wa.me) ou `null` se o número ainda não foi preenchido / está incompleto. */
export function linkWhatsApp(numero: string, mensagem: string): string | null {
  const digitos = numero.replace(/\D/g, '');
  if (digitos.length < 12) return null; // país (2) + DDD (2) + número (8 ou 9)
  return `https://wa.me/${digitos}?text=${encodeURIComponent(mensagem)}`;
}
