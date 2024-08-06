import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@modules": path.resolve(__dirname, "./src/modules"),
      "@contexts": path.resolve(__dirname, "./src/context"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  plugins: [react()],
})
