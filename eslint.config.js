import pluginJs from '@eslint/js';
import globals from 'globals';
import tsEslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginHooks from 'eslint-plugin-react-hooks';
import pluginRefresh from 'eslint-plugin-react-refresh';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import { defineConfig } from 'eslint/config';

const reactConfig = {
  name: 'React Config',
  files: ['src/**/*.{js,ts,jsx,tsx}'],
  languageOptions: {
    ...pluginJsxA11y.flatConfigs.recommended.languageOptions,
  },
  settings: {
    react: { version: 'detect' },
  },
  plugins: {
    react: pluginReact,
    'react-hooks': pluginHooks,
    'react-refresh': pluginRefresh,
    'jsx-a11y': pluginJsxA11y,
  },
  rules: {
    ...pluginReact.configs.flat.recommended.rules,
    ...pluginHooks.configs.recommended.rules,
    ...pluginRefresh.configs.recommended.rules,
    ...pluginJsxA11y.flatConfigs.recommended.rules,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'] },
  {
    ignores: [
      '{dist,build,public,node_modules}/**',
      '**/lib/utils.{js,ts}',
      '**/components/ui/**/*.{jsx,tsx}',
      '**/*.config.*',
    ],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2024,
      },
      parserOptions: {
        project: ['tsconfig.json', 'tsconfig.*.json'],
      },
    },
  },
  pluginJs.configs.recommended,
  tsEslint.configs.recommendedTypeChecked,
  tsEslint.configs.stylistic,
  reactConfig,
]);
