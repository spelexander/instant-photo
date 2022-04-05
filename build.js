const { build } = require("esbuild");
const { dependencies } = require("./package.json");
const cssModulesPlugin = require("esbuild-css-modules-plugin");

const entryFile = "src/instant-photo.tsx";
const shared = {
    bundle: true,
    entryPoints: [entryFile],
    external: Object.keys(dependencies),
    logLevel: "info",
    minify: true,
    sourcemap: false,
    plugins: [
        cssModulesPlugin()
    ]
};

build({
    ...shared,
    format: "esm",
    outfile: "./dist/index.esm.js",
    target: ["esnext", "node12.22.0"],
});

build({
    ...shared,
    format: "cjs",
    outfile: "./dist/index.cjs.js",
    target: ["esnext", "node12.22.0"],
});
