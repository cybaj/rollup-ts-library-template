import typescript from 'rollup-plugin-typescript2'

export default {
  input: 'src/main.ts',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm'
    }
  ],
  plugins: [
    typescript({
      declaration: true,
      declarationDir: 'dist/types'
    })
  ]
}
