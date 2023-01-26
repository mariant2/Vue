import Vue from "vue"
import Router from "vue-router"
import Home from "./components.Home.vue"
import Shop from './components/Shop.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

export const routes = [
  { path: '/shop', component: Shop },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
]

<template>
  <div id="app">
    <nav>
      <router-link to="/">Navbar</router-link>
      <router-link to="/">Home</router-link>
      <router-link to="/">Shop</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view/>
  </div>
</template>

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})




