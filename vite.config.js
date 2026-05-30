import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// fionahello.github.io 为用户站点，根路径部署
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'docs',
    emptyOutDir: true
  },
  server: {
    port: 3000,
    open: true
  }
})
