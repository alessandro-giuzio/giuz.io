/**
 * Single source of truth for identity, navigation and links.
 * Edit here; layouts, schema, llms.txt and the footer read from it.
 */
export const site = {
  url: 'https://giuz.io',
  name: 'Alessandro Giuzio',
  shortName: 'giuz',
  lang: 'es',
  locale: 'es_ES',
  jobTitle: 'Desarrollador front-end',
  tagline: 'Tú diseñas, yo lo construyo bien.',
  description:
    'Alessandro Giuzio, desarrollador front-end en Donostia. Partner técnico para agencias y estudios: sitios rápidos, accesibles y fáciles de mantener con Astro, WordPress y Vue.',
  location: {
    city: 'Donostia-San Sebastián',
    region: 'Gipuzkoa',
    country: 'ES',
  },
  languages: ['es', 'en', 'it'],
  // TODO: create the mailbox (Cloudflare Email Routing) before launch.
  email: 'hola@giuz.io',
  // TODO: add the booking link for the 20-minute intro call (Cal.com or similar).
  bookingUrl: '',
  studio: {
    name: 'AgencyGA',
    url: 'https://www.agencyga.es/',
  },
  // Profiles that identify the same person. Feeds schema.org `sameAs`.
  // TODO: add the LinkedIn profile URL.
  sameAs: ['https://github.com/alessandro-giuzio', 'https://www.agencyga.es/'],
} as const;

/** Single-page site: the main nav jumps to sections of the landing page. */
export const nav = [
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#proyectos', label: 'Proyectos' },
  { href: '/#sobre-mi', label: 'Sobre mí' },
  { href: '/#contacto', label: 'Contacto' },
] as const;

export const legalNav = [
  { href: '/aviso-legal/', label: 'Aviso legal' },
  { href: '/privacidad/', label: 'Privacidad' },
  { href: '/cookies/', label: 'Cookies' },
] as const;

/** Stable @id for the Person node, shared with agencyga.es as `founder`. */
export const personId = `${site.url}/#person`;
export const websiteId = `${site.url}/#website`;
