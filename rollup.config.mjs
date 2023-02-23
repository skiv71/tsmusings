import typescript from '@rollup/plugin-typescript'
import eslint from '@rollup/plugin-eslint'

export default {
  input: 'src/index.ts',
  output: {
    file: 'index.js',
    format: 'cjs'
  },
  plugins: [
    typescript(),
    eslint()
  ]
}
