import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import nodejs from "@astrojs/node";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  site: "https://ramiffer.github.io",
  output: "server",
  adapter: nodejs(),
});
