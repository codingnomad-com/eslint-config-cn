module.exports = {
  root: true,
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    'plugin:jest/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    parserOptions: {
      project: ['./App.tsx', './tsconfig.json'],
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  plugins: [
    'react',
    'jsx-a11y',
    'react-hooks',
    'prettier',
    'import',
    'jest',
    'typescript-sort-keys',
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['camelCase', 'PascalCase'],
        selector: 'default',
      },
      {
        format: ['camelCase', 'PascalCase'],
        selector: ['variable', 'function'],
      },
      {
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
        selector: 'parameter',
      },
      {
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'require',
        modifiers: ['private'],
        selector: 'memberLike',
      },
      {
        format: ['PascalCase'],
        selector: 'typeLike',
      },
    ],
    'arrow-parens': ['error', 'always'],
    'comma-dangle': ['error', 'only-multiline'],
    'import/extensions': 0,
    'import/no-default-export': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/no-unresolved': 'error',
    'import/prefer-default-export': 0,
    'jest/no-export': 'off',
    'jsx-a11y/label-has-associated-control': 0,
    'no-console': 1,
    'no-plusplus': [
      2,
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-useless-constructor': 0,
    'object-curly-newline': 'off',
    'prefer-destructuring': 1,
    'prettier/prettier': 1,
    'react/destructuring-assignment': 1,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 0,
    'react/no-unstable-nested-components': 'off',
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 0,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      // 'babel-module': {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
      typescript: {
        alwaysTryTypes: true,
        // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        project: ['./tsconfig.json'],
      },
    },
  },
};
