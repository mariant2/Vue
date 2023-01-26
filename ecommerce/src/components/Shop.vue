<template>
    <div>
      <h1>Our Products</h1>
      <div v-for="product in products" :key="product.id">
        <h2>{{ product.name }}</h2>
        <img :src="product.image" :alt="product.name">
        <p>{{ product.description }}</p>
        <p>Price: {{ product.price }}</p>
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          { id: 1, name: 'Handcrafted Wooden Box', image: 'https://via.placeholder.com/150', description: 'A beautiful handcrafted wooden box for storing trinkets and keepsakes.', price: 25 },
          { id: 2, name: 'Handmade Pottery Vase', image: 'https://via.placeholder.com/150', description: 'A unique and one-of-a-kind pottery vase, perfect for flowers or as a standalone piece.', price: 35 },
          { id: 3, name: 'Hand-Knitted Scarf', image: 'https://via.placeholder.com/150', description: 'Stay warm and stylish with this hand-knitted scarf.', price: 20 },
          { id: 4, name: 'Hand-Stitched Leather Wallet', image: 'https://via.placeholder.com/150', description: 'A durable and long-lasting leather wallet, hand-stitched with care.', price: 40 },
          { id: 5, name: 'Hand-Painted Tote Bag', image: 'https://via.placeholder.com/150', description: 'Carry your essentials in style with this hand-painted tote bag.', price: 30 },
        ]
      }
    },
    methods: {
      addToCart(product) {

      }
    }
  }
  </script>
  