import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Home from './components/Home.vue'
import Cardapio from './components/Cardapio.vue'
import Sobre from './components/Sobre.vue'
import * as VueRouter from 'vue-router'
import {vuetify} from './plugins/vuetify'
const routes = [
    { 
    path: '/',
    component: Home 
    },
    {
        path: '/cardapio',
        component: Cardapio
    },
    {
        path: '/sobre',
        component: Sobre
    }
    
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})
const app = createApp(App)

app.use(router)
app.use(vuetify)
app.mount('#app')
