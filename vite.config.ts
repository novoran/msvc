import { defineConfig } from 'vite-plus';

export default defineConfig({
  // Formatting rules (Oxfmt)
  fmt: {
    singleQuote: true,
    semi: true,
    tabWidth: 2,
    sortPackageJson: true,
    ignorePatterns: ['dist/**', '.astro/**', 'node_modules/**', 'pnpm-lock.yaml', '.vite-hooks/**'],
  },

  // Linting rules (Oxlint)
  lint: {
    ignorePatterns: ['dist/**', '.astro/**', 'node_modules/**', '.vite-hooks/**'],
  },

  // Unified checks (vp check)
  check: {
    fmt: true,
    lint: true,
  },

  // Pre-commit staged checks: run fast formatter/linter on staged files
  staged: {
    '*': 'vp check --fix',
  },
});
