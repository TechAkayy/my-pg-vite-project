// import '/assets/style.css'
import { createApp } from 'vue/dist/vue.esm-bundler'

// Note: For some reason, styles are not loading here, so we added a link tag to the css in vuetify.html
// import 'vuetify/styles'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
	icons: {
		defaultSet: 'mdi',
		aliases,
		sets: {
			mdi
		}
	},
	components,
	directives
})

const app = createApp({
	data: () => ({
		message: 'Hello World',
		loading: false,
		selection: 1,
		model: 0,
		colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange']
	}),

	methods: {
		reserve() {
			this.loading = true

			setTimeout(() => (this.loading = false), 2000)
		}
	}
})
	.use(vuetify)
	.mount('#app')
