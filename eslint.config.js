const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
const compat = new FlatCompat();

module.exports = [
  js.configs.recommended,
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/.next/**'],
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  }
]; 