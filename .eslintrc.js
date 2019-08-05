module.exports = {
  extends: [
    'eslint-config-ali/typescript',
    'prettier',
    'plugin:prettier/recommended',
  ],
  env: { es6: true },
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'off',
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
    'require-yield': 'off',
    semi: ['error', 'never'],
    '@typescript-eslint/semi': ['error', 'never'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'no-shadow': ['error', { hoist: 'never' }],
    'prefer-promise-reject-errors': 'off',
    'no-await-in-loop': 'off',
  },
  plugins: ['prettier'],
}
