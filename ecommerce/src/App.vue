<template>
  <div id="app">
    <nav>
      <router-link to="/">Shop</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style>
vnav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #F8F8F8;
}

nav a {
  color: #333;
  text-decoration: none;
  margin-right: 1rem;
  font-weight: bold;
}

nav a:hover {
  color: #0099CC;
}

nav .logo {
  font-size: 1.5rem;
}

nav .cart {
  display: flex;
  align-items: center;
}

nav .cart i {
  margin-right: 0.5rem;
}

nav .cart span {
  font-weight: bold;
}

</style>

