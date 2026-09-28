import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://coreu.ai',
  trailingSlash: 'never',
  adapter: vercel(),
  integrations: [sitemap()],
});
