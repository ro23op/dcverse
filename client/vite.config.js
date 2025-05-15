import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import process from 'process'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    server: {
      host: '0.0.0.0',
      port: env.PORT ? Number(env.PORT) : 3000,
    },
    preview: {
      host: '0.0.0.0',
      port: env.PORT ? Number(env.PORT) : 3000,
      allowedHosts: ['dcverse-1.onrender.com']
    }
  }
})


