import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
<<<<<<< HEAD
  site: 'https://ramiffer.github.io',
=======
  output: "server",
  adapter: vercel(),
>>>>>>> 341cb95df322cc4d0e6958758a2fc6790f2d74f1
});
