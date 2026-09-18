import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import expressiveCode from 'astro-expressive-code';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';

/**
 * Auto-detect deployment platform and configure site URL & base path.
 * Supports:
 * - GitHub Pages (GitHub Actions)
 * - Vercel
 * - Netlify
 * - Render
 * - Cloudflare Pages
 * - Local / Default
 */
function getDeploymentConfig() {
  // Explicit manual overrides take top priority
  const explicitSite = process.env.SITE || process.env.ASTRO_SITE;
  const explicitBase = process.env.BASE || process.env.ASTRO_BASE;

  // 1. GitHub Actions / GitHub Pages
  if (process.env.GITHUB_ACTIONS === 'true' || process.env.GITHUB_PAGES === 'true') {
    const repo = process.env.GITHUB_REPOSITORY || ''; // format: "owner/repo"
    const [owner, repoName] = repo.split('/');
    const isUserPage = repoName && repoName.toLowerCase().endsWith('.github.io');

    const detectedSite = explicitSite || (owner ? `https://${owner}.github.io` : 'https://devlog.example.com');
    const detectedBase = explicitBase !== undefined ? explicitBase : (isUserPage || !repoName ? '/' : `/${repoName}`);

    return {
      platform: 'GitHub Pages',
      site: detectedSite,
      base: detectedBase,
    };
  }

  // 2. Vercel
  if (process.env.VERCEL === '1' || process.env.VERCEL === 'true') {
    const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
    const formattedUrl = vercelUrl
      ? (vercelUrl.startsWith('http') ? vercelUrl : `https://${vercelUrl}`)
      : 'https://devlog.example.com';

    return {
      platform: 'Vercel',
      site: explicitSite || formattedUrl,
      base: explicitBase || '/',
    };
  }

  // 3. Netlify
  if (process.env.NETLIFY === 'true') {
    return {
      platform: 'Netlify',
      site: explicitSite || process.env.URL || process.env.DEPLOY_PRIME_URL || 'https://devlog.example.com',
      base: explicitBase || '/',
    };
  }

  // 4. Render
  if (process.env.RENDER === 'true') {
    return {
      platform: 'Render',
      site: explicitSite || process.env.RENDER_EXTERNAL_URL || 'https://devlog.example.com',
      base: explicitBase || '/',
    };
  }

  // 5. Cloudflare Pages
  if (process.env.CF_PAGES === '1') {
    return {
      platform: 'Cloudflare Pages',
      site: explicitSite || process.env.CF_PAGES_URL || 'https://devlog.example.com',
      base: explicitBase || '/',
    };
  }

  // 6. Local / Default fallback
  return {
    platform: 'Local / Custom',
    site: explicitSite || 'https://devlog.example.com',
    base: explicitBase || '/',
  };
}

const deployment = getDeploymentConfig();
console.log(`🚀 [Astro Config] Platform: ${deployment.platform} | Site: ${deployment.site} | Base: ${deployment.base}`);

export default defineConfig({
  site: deployment.site,
  base: deployment.base,
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


