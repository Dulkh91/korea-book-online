import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwindcss.css'
import router from './router'
import { createPinia } from 'pinia'

createApp(App).use(createPinia()).use(router).mount('#app')
