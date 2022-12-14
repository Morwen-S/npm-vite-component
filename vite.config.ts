import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'

import {default as vue2} from '@vitejs/plugin-vue2';
import {default as vue3} from '@vitejs/plugin-vue';

export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  const VUE_VERSION = process.env.VITE_VUE_VERSIONS;

  const vuePlugin = VUE_VERSION === '2' ? vue2 : vue3;
  const outDir = VUE_VERSION === '2' ? 'vue2' : 'vue3';
  const fileName = VUE_VERSION === '2'
    ? 'npm-vite-component'
    : (format) => `npm-vite-component.${format}.js`;

  return defineConfig({
    plugins: [vuePlugin()],
    build: {
      outDir: `./${outDir}`,
      lib: {
        entry: resolve(__dirname, 'src/main.ts'),
        name: 'npm-vite-component',
        fileName: fileName,
      },
      rollupOptions: {
        external: ['vue'],
        resolve: {
          dedupe: ['vue']
        },
        output: {
          globals: {
            vue: "Vue"
          },
        }
      },
    }
  })
}
