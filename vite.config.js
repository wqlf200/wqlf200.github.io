import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 用户站点 wqlf200.github.io → https://wqlf200.github.io/
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
