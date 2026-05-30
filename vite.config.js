import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 仓库 wqlf200/fionahello.github.io → https://wqlf200.github.io/fionahello.github.io/
const repoBase = '/fionahello.github.io/'

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
