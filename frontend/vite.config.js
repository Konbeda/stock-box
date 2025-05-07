import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  build: {
    outDir: "../backend/frontend/dist",
  },
  plugins: [tailwindcss()],
});
