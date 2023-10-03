import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  }
})

// import reactRefresh from '@vitejs/plugin-react-refresh';
// import { defineConfig } from "vite";
// /**
//  * https://vitejs.dev/config/
//  * @type { import('vite').UserConfig }
//  */
// export default defineConfig({
//   define: {
//     global: {},
//     process: {
//       'env': {}
//     } 
//   },
//   plugins: [reactRefresh()],
//   server: {
//     host: '0.0.0.0',
//     hmr: {
//       port: 443,
//     }
//   }
// })