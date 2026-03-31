import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/MockingSCMWebsite/",
   build: {
    sourcemap: true, // Set to false to disable .map files in production
  },
})