import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          services: path.resolve(__dirname, 'services/index.html'),
          evacuationPlanning: path.resolve(__dirname, 'evacuation-planning/index.html'),
          safetyEquipment: path.resolve(__dirname, 'safety-equipment/index.html'),
          awarenessEvents: path.resolve(__dirname, 'awareness-events/index.html'),
          about: path.resolve(__dirname, 'about/index.html'),
          contact: path.resolve(__dirname, 'contact/index.html'),
          privacy: path.resolve(__dirname, 'privacy/index.html'),
          terms: path.resolve(__dirname, 'terms/index.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
