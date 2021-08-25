import {createRouter, createWebHashHistory} from 'vue-router'


import CitiesList from '../components/CitiesList.vue'

import home from '../components/home'

const routes = [
    {path: '/Cities', component: CitiesList},
    {path: '/home', component: home},
    {path: '/', redirect: '/home'}
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,})

export default router





