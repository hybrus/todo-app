/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// styles
import './styles/main.scss'

import store from './store/store'
import router from './router/router'

const app = createApp({
    extends: App,
    beforeCreate() { this.$store.dispatch('initStore') }
})
    .use(store)
    .use(router)

store.subscribe((action, state) => {
    localStorage.setItem('tasks', JSON.stringify(state));
});

registerPlugins(app)
app.mount('#app')


