const tseslint = require('typescript-eslint');

module.exports = [
  // Ignore compiled files and node_modules
  {
    ignores: ['build/**', 'node_modules/**', '**/*.js', '**/*.d.ts'],
  },

  // TypeScript files
  {
    files: ['**/*.ts'],

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
      globals: {},
    },

    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },

    rules: {
      // ESLint recommended rules
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'warn',
    },
  },

  // Test files
  {
    files: ['spec/**/*.ts'],
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
      },
    },
  },
];
