import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TheHeader from '@/components/UI/TheHeader'

const app = createApp(App)

app.component('the-header', TheHeader)

app.use(store).use(router).mount('#app')
