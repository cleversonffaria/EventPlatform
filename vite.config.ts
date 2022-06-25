import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    define: {
      TESTE: env.TESTE,
    },
    plugins: [react()],
    resolve: {
      alias: {
        src: path.resolve("./src"),
      },
    },
  };
});
