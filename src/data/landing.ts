/**
 * Landing page content shared by the page itself (src/pages/index.astro),
 * its schema.org nodes, Base.astro (Person.knowsAbout) and llms.txt.
 * Edit the copy here so the page and the structured data never drift apart.
 */

export const servicios = [
  {
    id: 'revision',
    name: 'Revisión técnica',
    tag: 'Para empezar',
    intro:
      'Reviso un sitio vuestro, en producción o a punto de entregarse, y os digo qué falla, por qué importa y cómo arreglarlo.',
    items: [
      'Rendimiento y Core Web Vitals',
      'Accesibilidad WCAG 2.2 AA',
      'SEO técnico y datos estructurados',
      'Preparación para buscadores con IA: llms.txt y contenido que se pueda citar',
      'Calidad del HTML y del código',
      'Responsive y compatibilidad entre navegadores',
      'Seguridad básica: HTTPS y cabeceras',
      'Fidelidad al diseño',
    ],
    meta: 'Informe online y PDF, con los problemas ordenados por prioridad. En 2 días laborables.',
  },
  {
    id: 'white-label',
    name: 'Desarrollo white-label',
    tag: 'Por proyecto',
    intro: 'Construyo vuestros diseños con vuestro nombre. Para vuestro cliente, el trabajo es vuestro.',
    items: [
      'Front-end con Astro, Vue y Tailwind',
      'PHP con WordPress y Laravel',
      'Firmo un NDA y mi nombre no aparece en el código ni en los créditos',
      'Trato con vosotros o, si lo preferís, con vuestro cliente en vuestro nombre',
      'El código vive en vuestro repositorio y es vuestro al pagar el proyecto',
      'Accesibilidad AA, buen rendimiento y documentación de entrega incluidos',
      'Funciones con IA: chatbots, búsqueda o herramientas de contenido sobre APIs de IA',
      '30 días de corrección de errores tras el lanzamiento',
    ],
    meta: 'Presupuesto cerrado por proyecto.',
  },
  {
    id: 'sesiones',
    name: 'Bono de sesiones',
    tag: 'Flexible',
    intro: 'Horas de mi tiempo para lo que vaya surgiendo, sin abrir un proyecto cada vez.',
    items: [
      'Bonos de 5 o 10 horas',
      'Se consumen en bloques de 30 minutos',
      'Válidos durante 6 meses',
      'Consultoría, revisión de código, correcciones, desarrollos pequeños o sesiones en directo con vuestro equipo',
      'Respuesta en 1–2 días laborables',
      'Registro claro de las horas usadas',
    ],
    meta: 'Sin permanencia.',
  },
];

export const faq = [
  {
    q: '¿Trabajas solo?',
    a: 'Sí. Quien habla con vosotros es quien escribe el código, sin intermediarios.',
  },
  {
    q: '¿Qué pasa si te pones enfermo o no estás disponible?',
    a: 'Si sé que voy a faltar, os aviso con antelación. Los plazos que doy incluyen margen para imprevistos. Y el código está siempre en vuestro repositorio y documentado, así que nada queda bloqueado esperándome.',
  },
  {
    q: '¿Puedes trabajar sin que nuestro cliente sepa que existes?',
    a: 'Sí. Firmo un NDA y mi nombre no aparece en el código ni en los créditos. Si hace falta, hablo con vuestro cliente en vuestro nombre y desde vuestro correo.',
  },
  {
    q: 'Tienes tu propio estudio, Agency-GA. ¿Competirías con nosotros?',
    a: 'No. Agency-GA trabaja solo con pequeños negocios de Gipuzkoa que me contactan directamente. Vuestros clientes son vuestros: nunca les ofrezco mis servicios por mi cuenta, ni durante el proyecto ni después. Y si alguno me contacta por su cuenta, os lo digo. Si queréis, lo dejamos por escrito en el NDA.',
  },
  {
    q: '¿Qué pasa con el código si dejamos de trabajar juntos?',
    a: 'Es vuestro. Vive en vuestro repositorio desde el primer día y está documentado, así que cualquier desarrollador puede seguir con él.',
  },
  {
    q: '¿Cobras por horas o por proyecto?',
    a: 'Las dos cosas. La revisión técnica y los proyectos white-label tienen precio cerrado antes de empezar. Para trabajos pequeños o continuos están los bonos de sesiones.',
  },
  {
    q: '¿Usas IA para programar?',
    a: 'Sí, como herramienta para trabajar más rápido, pero reviso y entiendo cada línea que entrego. Nunca meto datos confidenciales vuestros o de vuestros clientes en una herramienta de IA sin vuestro permiso.',
  },
];

export const herramientas = [
  { area: 'Front-end', tools: ['HTML semántico', 'CSS moderno', 'JavaScript', 'TypeScript', 'Astro', 'Vue', 'Tailwind CSS'] },
  { area: 'Back-end y CMS', tools: ['PHP', 'Laravel', 'Node.js', 'WordPress', 'Sanity'] },
  { area: 'Diseño', tools: ['Figma'] },
  { area: 'Calidad', tools: ['WCAG 2.2 AA', 'Core Web Vitals', 'SEO técnico'] },
  { area: 'IA', tools: ['Integraciones con APIs de IA', 'llms.txt y datos estructurados', 'Claude Code', 'Copilot', 'Cursor', 'Jev (TypeSafe)'] },
  { area: 'Despliegue', tools: ['Git', 'Cloudflare', 'Netlify', 'Coolify'] },
];

/**
 * Person.knowsAbout in the schema: the same tools, but as clean topic names
 * (some rows above are phrased as page copy).
 */
const schemaTerms: Record<string, string[]> = {
  'WCAG 2.2 AA': ['Accesibilidad web', 'WCAG 2.2'],
  'Integraciones con APIs de IA': ['Integración de IA'],
  'llms.txt y datos estructurados': ['llms.txt', 'Datos estructurados'],
};
export const knowsAbout = [
  'Desarrollo front-end',
  ...herramientas.flatMap((h) => h.tools).flatMap((t) => schemaTerms[t] ?? [t]),
];
