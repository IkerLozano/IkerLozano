import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//bootstrap
//import 'bootstrap/dist/css/bootstrap' no esta acabado y asi no se va a ver

const app = createApp(App)

app.use(router)

app.mount('#app')
