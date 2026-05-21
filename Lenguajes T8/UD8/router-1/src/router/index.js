import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      //component: HomeView,
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/pokemones',
      name: 'pokemones', //nombreUnico
      component: () => import('../views/PokemonesView.vue'),
    },
    {
      path: '/pokemones/:name',
      name: 'pokedetalle', //nombreUnico
      component: () => import('../views/PokeDetalleView.vue'),
    },
  ],
})

export default router
