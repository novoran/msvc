// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ['upload.wikimedia.org', 'lh3.googleusercontent.com', 'images.unsplash.com'],
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      devSourcemap: true,
    },
    server: {
      watch: {
        usePolling: false,
      },
    },
  },
});
