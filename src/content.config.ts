import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Case studies. One Markdown file per project in src/content/proyectos/. */
const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: z.object({
    // Bounds keep titles and meta descriptions inside what search results show.
    title: z.string().min(5).max(120),
    description: z.string().min(15).max(160),
    client: z.string(),
    year: z.number().int(),
    stack: z.array(z.string()).default([]),
    /** Public URL of the live project, if it can be shown. */
    url: z.url().optional(),
    /** Before/after numbers shown on the case page. */
    results: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

/** Technical notes (blog). Phase 2: not linked in the main nav yet. */
const notas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notas' }),
  schema: z.object({
    // Bounds keep titles and meta descriptions inside what search results show.
    title: z.string().min(5).max(120),
    description: z.string().min(15).max(160),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { proyectos, notas };
