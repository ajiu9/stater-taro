import ajiu9 from '@ajiu9/eslint-config'

export default ajiu9(
  {
    vue: false,
  },
  {
    rules: {
      'node/prefer-global/process': 'off',
    },
  },

)
