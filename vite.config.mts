import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig( {
    base: '/',
    server: {
        port: 3001,
        strictPort: true,
    },
    plugins: [
        svelte( {
            preprocess: sveltePreprocess( {
                typescript: {
                    tsconfigFile: './tsconfig.json',
                },
                scss: {
                    includePaths: ['src']
                }
            } ),
        } ),
        splitVendorChunkPlugin(),
        createHtmlPlugin( {
            minify: true,
            entry: '/src/index.ts',
            template: './src/index.html'
        } )
    ],
    build: {
        outDir: 'dist',
        assetsDir: './',
        sourcemap: false,
        rollupOptions: {
            input: '/src/index.ts',
            output: {
                entryFileNames: 'js/main.[hash].js',
                chunkFileNames: 'js/[name].[hash].js',
                assetFileNames: 'css/[name].[hash][extname]'
            }
        }
    },
} )
