// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});

// export default defineConfig({
//   base: "/portfolio-manager/", // Replace <YOUR_REPO_NAME> with your actual repository name
//   // ... other configurations
// });
