<template>
    <nav>
      <router-link to="/" class="logo">Ecommerce</router-link>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/shop">Shop</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
      <div class="cart">
          <i class="fas fa-shopping-cart"></i>
          <span>{{ cartItems }}</span>
      </div>
    </nav>
  </template>
  
  <script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  
  @Component
  export default class Navbar extends Vue {
    cartItems: number = 0
  
    mounted() {
      // Fetch the number of items in the cart from an API or local storage
      this.cartItems = 5
    }
  }
  </script>
  
  <style scoped>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #333;
    color: #fff;
  }
  
  nav .logo {
    font-size: 1.5rem;
    text-decoration: none;
    color: #fff;
  }
  
  nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  nav ul li {
    margin: 0 1rem;
  }
  
  nav ul li a {
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
  }
  
  nav .cart {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    margin-right: 1rem;
  }
  
  nav .cart i {
    margin-right: 0.5rem;
  }
  </style>
  