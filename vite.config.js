import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'

import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
	mode: 'development',
	define: {
		'process.env': process.env
	},
	server: {
		port: '5174'
	},
	build: {
		// minify: false,
		// sourcemap: true,
		outDir: 'dist',
		emptyOutDir: true,
		// https://vitejs.dev/config/build-options.html#build-lib
		lib: {
			entry: {
				confetti: './examples/confetti/confetti.js',
				bs5: './examples/bs5/bs5.js',
				vuetify: './examples/vuetify/vuetify.js'
			},
			// fileName: '[name]',
			// fileName: (format) => (format === 'cjs' ? `meta.cjs` : `meta.js`)
			formats: ['es', 'cjs']
		},

		// Vite uses Rollup under the hold, so rollup options & plugins can be used for advanced usage
		rollupOptions: {
			plugins: [visualizer()]
		}
	},
	plugins: [
		// TechAkayy - custom plugin to add vite client to all js files, so that when we add any v-tags in the page tree in pinegrow, the page will automatically refresh, as any changes to js requires a refresh.
		// Experimental: Uncomment this to auto-refresh the html pages when making any changes to it or to the imported js files. Note: At the moment, pinegrow is showing a confirmation dialog everytime
		// {
		// 	transform(code, id) {
		// 		if (id.endsWith('.js')) {
		// 			return {
		// 				code: `import "http://localhost:5174/@vite/client";${code}`
		// 			}
		// 		}
		// 	}
		// }
	]
})
