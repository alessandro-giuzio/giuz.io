import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { nav, site } from '@/site.config';

/** llms.txt: a plain-text summary of who this is and where things live, for AI crawlers. */
export const GET: APIRoute = async () => {
  const proyectos = await getCollection('proyectos', ({ data }) => !data.draft);
  const notas = await getCollection('notas', ({ data }) => !data.draft);
  const abs = (path: string) => new URL(path, site.url).href;

  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    `${site.name} is a front-end developer based in ${site.location.city}, Spain. He works as a technical partner for agencies, design studios and designers, and runs the local web studio ${site.studio.name} (${site.studio.url}). Languages: Spanish, English, Italian.`,
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
