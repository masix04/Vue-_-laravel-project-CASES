
import axios from 'axios';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router, axios);

app.mount('#app')
