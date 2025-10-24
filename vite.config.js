import { defineConfig } from 'vite';

export default defineConfig({
  // For GitHub Pages deployments; Action will set BASE_URL env.
  base: process.env.BASE_URL || '/',
});
