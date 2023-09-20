import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import vercel from "@astrojs/vercel/serverless";
import svelte from "@astrojs/svelte";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact(), svelte(), react()],
  output: "server",
  adapter: vercel()
});