import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "ReactModalWealthHealth",
      formats: ["es", "cjs"],
      fileName: (format) => `react-modal-wealthealth.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});