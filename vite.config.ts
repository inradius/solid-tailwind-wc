import { ConfigEnv, defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const viteConfig = ({ mode }: ConfigEnv) =>
  defineConfig({
    plugins: [solidPlugin({ dev: mode === 'development', hot: mode !== 'test' }), tailwindcss(), tsconfigPaths()],
    server: { port: 3000 },
    build: {
      target: 'ESNext',
      rollupOptions: {
        output: {
          assetFileNames: '[name][extname]',
          chunkFileNames: '[name]-[hash].js',
          entryFileNames: '[name]-[hash].js'
        }
      },
      emptyOutDir: false
    },
    resolve: {
      conditions: ['browser', 'development']
    }
  });

export default viteConfig;
