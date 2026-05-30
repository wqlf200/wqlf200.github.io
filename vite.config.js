import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 仓库 wqlf200/wqlf200 → https://wqlf200.github.io/wqlf200/
const repoBase = '/wqlf200/'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve' ? '/' : repoBase,
  build: {
    outDir: 'docs',
    emptyOutDir: true
  },
  server: {
    port: 3000,
    open: true
  }
}))
