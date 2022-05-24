import esbuild from "esbuild";
import sveltePlugin from "esbuild-svelte";


await esbuild.build({
  entryPoints: ["src/index.js"],
  mainFields: ["svelte", "browser", "module", "main"],
  bundle: true,
  minify: true,
  outfile: "dist/index.js",
  plugins: [sveltePlugin()]
});
