import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from 'vite-plugin-style-import';
// import dns from "dns"
// dns.setDefaultResultOrder("verbatim")

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // host: "localhost",
    port: 3000,
  },
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: name => `../es/${name}/style`
        }
     ]
    }),
  ]
})
