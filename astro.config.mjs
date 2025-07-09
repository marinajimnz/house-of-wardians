// astro.config.mjs
import { defineConfig } from 'astro/config';
import astroIcon from 'astro-icon';
import path from 'path';

export default defineConfig({
  integrations: [astroIcon()],
  alias: {
    '@components': path.resolve('./src/components'),
  },
});
