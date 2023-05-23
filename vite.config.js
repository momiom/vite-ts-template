/// <reference types="vitest" />

import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'lib',
      formats: ['umd'],
      fileName: (_) => 'lib.js'
    }
  },
  test: {
    includeSource: ['lib/**/*.{js,ts}']
  },
  define: {
    'import.meta.vitest': 'undefined'
  }
})
