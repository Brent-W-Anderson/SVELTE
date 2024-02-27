import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'

export default defineConfig( {
    base: '/',
    server: {
        port: 3001,
        strictPort: true,
    },
    plugins: [
        svelte( {
            preprocess: sveltePreprocess(),
        } ),
    ],
    build: {
        outDir: 'dist',
        assetsDir: './',
        sourcemap: false,
    },
} )
