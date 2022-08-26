import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    dedupe: ['vue']
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'npm-vite-component',
      fileName: `npm-vite-component`,
      // the proper extensions will be added
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "vue"
        },
      }
    }
  }
})
