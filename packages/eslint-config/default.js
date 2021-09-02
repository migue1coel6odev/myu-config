module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    files: ['*.ts', '*.tsx'],
    project: ['./tsconfig.eslint.json'],
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  globals: {
    JSX: 'readonly',
  },
  plugins: ['import', 'jsx-a11y', 'prettier'],
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-console': 'warn',
    'no-shadow': 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-shadow': ['error'],
    'react-hooks/exhaustive-deps': 'off',
    'react-native/no-inline-styles': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@myu-tools/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: 'src/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'prettier/prettier': 'error',
  },
};
