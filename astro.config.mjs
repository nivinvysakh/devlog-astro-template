import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import expressiveCode from 'astro-expressive-code';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';

export default defineConfig({
  site: 'https://devlog.example.com',
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  integrations: [
    expressiveCode({
      themes: ['tokyo-night'],
      useThemedScrollbars: true,
      styleOverrides: {
        borderRadius: '1rem',
        borderWidth: '1px',
        borderColor: 'rgba(255, 255, 255, 0.15)',
        codeFontFamily: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
        uiFontFamily: '"Space Grotesk", "Plus Jakarta Sans", system-ui, sans-serif',
      },
    }),
    mdx(),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

