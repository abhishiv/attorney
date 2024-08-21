import * as esbuild from "esbuild";

(async () => {
  await esbuild.build({
    entryPoints: ["src/index.ts"], // Specify your entry point(s) here
    outfile: "dist/index.js", // Specify the output file here
    bundle: true,
    packages: "external",
    target: "es2022",
    format: "esm",
    sourcemap: false,
    minify: true,
    plugins: [
      //      sassPlugin({
      //        type: "style",
      //        transform: postcssModules({
      //          // ...put here the options for postcss-modules: https://github.com/madyankin/postcss-modules
      //        }),
      //      }),
    ],
  });
})();
