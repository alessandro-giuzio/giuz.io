import type { APIRoute } from 'astro';

/**
 * Every crawler is allowed. Content-Signal (contentsignals.org) states what the content may be
 * used for; all "yes" matches the CC BY 4.0 licence in the aviso legal (§3).
 */
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('sitemap-index.xml', site).href;
  const lines = [
    'User-agent: *',
    'Content-Signal: search=yes, ai-input=yes, ai-train=yes',
    'Allow: /',
    '',
    `Sitemap: ${sitemap}`,
    '',
  ];
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
