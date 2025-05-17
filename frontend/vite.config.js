import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  build: {
    outDir: "../backend/frontend/dist",
  },
  server: {
    allowedHosts: ['95fb-177-138-87-192.ngrok-free.app'],
  },
  plugins: [tailwindcss()],
});
