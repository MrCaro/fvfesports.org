import { createApp } from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax3';
import 'vuesax3/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css';
import './index.css'
import './main.css'
import './js/base.js'

const app = createApp(App)
    app.use(Vuesax)
    .mount('#app')

