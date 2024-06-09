import { defineConfig, presetUno, presetAttributify, transformerVariantGroup, presetIcons } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({ collections: { ep: () => import('@iconify-json/ep/icons.json').then(i => i.default) } }),
  ],
  transformers: [transformerVariantGroup()],
});
