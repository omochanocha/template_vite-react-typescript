/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  ignoreFiles: ['**/node_modules/**'],
  plugins: ['stylelint-order'],
  rules: {},
  // rules: {
  //   'block-no-empty': true,
  // },
};
