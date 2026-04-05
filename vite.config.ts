import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'bugdrop-url',
      transformIndexHtml(html) {
        const url = process.env.VITE_BUGDROP_URL || 'https://bugdrop.neonwatty.workers.dev';
        return html.replace('__BUGDROP_URL__', url);
      },
    },
  ],
})
