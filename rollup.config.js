import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import common from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";

export default {
  input: "src/main.ts",
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs",
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
      inlineDynamicImports: true,
    },
  ],
  plugins: [
    resolve({browser: true}),
    common(),
    babel({ babelHelpers: "bundled" }),
    typescript({
      declaration: true,
      declarationDir: "dist/types",
    }),
  ],
};

