import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  // Astro recommended rules & parser
  ...eslintPluginAstro.configs.recommended,
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**', '.vite-hooks/**'],
  },
];
