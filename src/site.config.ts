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
    'Desarrollo front-end para agencias y estudios: white-label, revisiones técnicas y bonos de sesiones. Webs rápidas, accesibles y fáciles de mantener.',
  location: {
    city: 'Donostia-San Sebastián',
    region: 'Gipuzkoa',
    country: 'ES',
  },
  languages: ['es', 'en', 'it'],
  // Fixed, unhashed photo URL for schema.org Person.image (and other sites' profiles).
  // The page itself renders the optimized copy in src/assets/alessandro.webp.
  photo: '/alessandro-giuzio.jpg',
  // Social preview card (1200×630) for every page. Replace the file to change it.
  ogImage: {
    src: '/og.jpg',
    width: 1200,
    height: 630,
    alt: 'Tú diseñas, yo lo construyo bien. Alessandro Giuzio, desarrollo front-end para agencias y estudios.',
  },
  // Licence for the site's texts (aviso legal §3). Design, code, logo and photos are not covered.
  license: 'https://creativecommons.org/licenses/by/4.0/',
  // Cloudflare Email Routing forwards it to hola@agencyga.es (Namecheap Private Email).
  email: 'hola@giuz.io',
  // TODO: add the booking link for the 20-minute intro call (Cal.com or similar).
  bookingUrl: '',
  // Holder data for the legal pages (LSSI-CE art. 10). Same holder as agencyga.es.
  legal: {
    holder: 'Alessandro Giuzio, profesional autónomo',
    nif: 'X9612810Y',
    address: 'Zarautz Kalea, 132, 20018 Donostia-San Sebastián, Gipuzkoa',
    updated: '16 de octubre de 2026',
  },
  studio: {
    name: 'Agency-GA',
    url: 'https://agencyga.es/',
    // Organization @id exactly as agencyga.es declares it (www form, though the site itself is served on the apex).
    id: 'https://www.agencyga.es/#organization',
  },
  // Profiles that identify the same person. Feeds schema.org `sameAs`.
  sameAs: [
    'https://www.linkedin.com/in/alessandrogiuzio/',
    'https://github.com/alessandro-giuzio',
    'https://twitter.com/giuzioale',
    'https://agencyga.es/',
  ],
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
  { href: '/llms.txt', label: 'llms.txt' },
] as const;

/** Stable @id for the Person node, shared with agencyga.es as `founder`. */
export const personId = `${site.url}/#person`;
export const websiteId = `${site.url}/#website`;
