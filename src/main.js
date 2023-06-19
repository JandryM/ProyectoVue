import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue'
import InicioComponent from '../src/components/InicioComponent'
import PerfilComponent from '../src/components/PerfilComponent'
import RegistroComponent from '../src/components/RegistroComponent'
import AsociadosComponent from '../src/components/AsociadosComponent'

const routes = [
    {path: '/inicio', name: 'inicio', component: InicioComponent, },
    {path: '/perfil', name: 'perfil', component: PerfilComponent, },
    {path: '/registro', name: 'registro', component: RegistroComponent, },
    {path: '/asociados', name: 'asociados', component: AsociadosComponent, }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App)

app.use(router)

app.mount('#app')
