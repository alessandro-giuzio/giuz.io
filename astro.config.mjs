// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://giuz.io',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  // Fonts are self-hosted from giuz.io: Astro copies the woff2 files from the installed
  // @fontsource packages at build time. No request ever goes to Google or a CDN.
  // Latin subset only: it covers Spanish, Italian and English.
  fonts: [
    {
      // Headings: high-contrast display serif.
      name: 'Instrument Serif',
      cssVariable: '--font-instrument',
      provider: fontProviders.local(),
      fallbacks: ['serif'],
      options: {
        variants: [
          { src: ['@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2'], weight: 400, style: 'normal' },
          { src: ['@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff2'], weight: 400, style: 'italic' },
        ],
      },
    },
    {
      // Body text and UI: variable, one file for every weight.
      name: 'Inter',
      cssVariable: '--font-inter',
      provider: fontProviders.local(),
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          { src: ['@fontsource-variable/inter/files/inter-latin-wght-normal.woff2'], weight: '100 900', style: 'normal' },
        ],
      },
    },
    {
      // Labels, code and numbers.
      name: 'IBM Plex Mono',
      cssVariable: '--font-plex-mono',
      provider: fontProviders.local(),
      fallbacks: ['monospace'],
      options: {
        variants: [
          { src: ['@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2'], weight: 400, style: 'normal' },
          { src: ['@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff2'], weight: 500, style: 'normal' },
        ],
      },
    },
  ],
  integrations: [
    sitemap({
      // Legal pages are noindex: keep them out of the sitemap too.
      filter: (page) => !/\/(aviso-legal|privacidad|cookies)\/$/.test(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
