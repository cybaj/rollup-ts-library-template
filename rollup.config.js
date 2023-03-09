import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

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
    resolve(),
    babel({babelHelpers: 'bundled'}),
    typescript({
      declaration: true,
      declarationDir: 'dist/types'
    })
  ]
}

