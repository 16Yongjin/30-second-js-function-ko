import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src')
const publicDir = resolve(__dirname, 'public')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
  root,
  publicDir,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        200: resolve(root, '200.html'),
      },
    },
  },
})
