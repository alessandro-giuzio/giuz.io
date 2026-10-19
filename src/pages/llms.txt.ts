import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '@/site.config';
import { getNav } from '@/lib/nav';
import { servicios, herramientas } from '@/data/landing';

/** llms.txt: a plain-text summary of who this is and where things live, for AI crawlers. */
export const GET: APIRoute = async () => {
  const proyectos = await getCollection('proyectos', ({ data }) => !data.draft);
  const notas = await getCollection('notas', ({ data }) => !data.draft);
  const nav = await getNav();
  const abs = (path: string) => new URL(path, site.url).href;

  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    `${site.name} is a front-end developer based in ${site.location.city}, Spain. He works as a technical partner for agencies, design studios and designers, and runs the local web studio ${site.studio.name} (${site.studio.url}). Languages: Spanish, English, Italian.`,
    '',
    `Licence: texts are CC BY 4.0 (${site.license}). Use them, also in AI models, crediting giuz.io with a link. Design, code, logo and photos are not covered.`,
    '',
    '## Services',
    '',
    'Prices are not published: each job gets a fixed quote after a first conversation by email.',
    '',
    ...servicios.map((s) => `- [${s.name}](${abs(`/#${s.id}`)}): ${s.intro} ${s.meta}`),
    '',
    '## Tools',
    '',
    ...herramientas.map((h) => `- ${h.area}: ${h.tools.join(', ')}`),
    '',
    '## Pages',
    '',
    ...nav.map((item) => `- [${item.label}](${abs(item.href)})`),
  ];

  if (proyectos.length) {
    lines.push('', '## Proyectos', '', ...proyectos.map((p) => `- [${p.data.title}](${abs(`/proyectos/${p.id}/`)}): ${p.data.description}`));
  }
  if (notas.length) {
    lines.push('', '## Notas', '', ...notas.map((n) => `- [${n.data.title}](${abs(`/notas/${n.id}/`)}): ${n.data.description}`));
  }
  lines.push('', '## Contact', '', `- Email: ${site.email}`, ...site.sameAs.map((u) => `- ${u}`), '');

  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
