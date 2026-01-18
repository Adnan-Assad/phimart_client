// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   build: {
//     target: "esnext",
//   },
// });
// vite.config.js
import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        require("autoprefixer"),
        // optional: ignore unknown at-rules
        require("postcss-safe-parser"),
      ],
    },
  },
});
