const testBoilerplate = (name) => `
// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------
var rule = require('../../../lib/rules/${name}');
var RuleTester = require('eslint').RuleTester;

const errorMessage = '';
var tester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  }
});

tester.run('${name}', rule, {
  valid: [
    { 
      filename: 'test.vue',
      code: '<template></template>',
    },
  ],
  invalid: [{
    filename: 'test.vue',
    code: '<template></template>',
    errors: [{
      message: errorMessage
    }]
  }],
});
`;

module.exports = testBoilerplate;
