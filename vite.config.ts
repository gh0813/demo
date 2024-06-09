import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Unocss from 'unocss/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import * as path from 'path';

const pathSrc = path.resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  // Components可以自动导入vue组件，所以在使用Element组件的时候就可以直接写而不导入了(自动导入.vue和样式)
  plugins: [
    vue(),
    vueJsx(),
    Unocss(),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: path.resolve(pathSrc, 'components.d.ts'),
    }),
  ],
  resolve: {
    alias: {
      '@': pathSrc,
    },
  },
});
