import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import createSvgSpritePlugin from "vite-plugin-svg-spriter";
import path from "path";

const SRC_PATH = path.resolve(__dirname, "src");
const SVG_FOLDER_PATH = path.resolve(SRC_PATH, "svg-sprite");

export default defineConfig({
   plugins: [injectHTML(), createSvgSpritePlugin({ svgFolder: SVG_FOLDER_PATH })],
   build: {
      rollupOptions: {
         input: {
            main: path.resolve(__dirname, "index.html"),

         },
      },
   },
});
