import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { node } from "@astro/types/node";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  site: 'https://ramiffer.github.io'
});
