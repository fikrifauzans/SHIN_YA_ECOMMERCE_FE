import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@modules": path.resolve(__dirname, "./src/modules"),
      "@context": path.resolve(__dirname, "./src/context"),
    },
  },
  plugins: [react()],
})
