module.exports = {
  extends: ['airbnb'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    'jest/globals': true,
  },
  plugins: [
    'react',
    'jest',
    'react-hooks',
    'shopify',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': 'off',
    'react/forbid-prop-types': ['warn', {
      forbid: [ 'any' ],
    }],
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': ['error', {
      html: 'enforce',
      custom: 'ignore',
    }],
    'shopify/jsx-no-complex-expressions': 'off',
    'shopify/jsx-no-hardcoded-content': 'error',
    'shopify/jsx-prefer-fragment-wrappers': 'error',
    'shopify/prefer-module-scope-constants': 'error',
    'shopify/binary-assignment-parens': ['error', 'always'],
    'shopify/prefer-early-return': ['error', {
      maximumStatements: 1,
    }],
  },
};
