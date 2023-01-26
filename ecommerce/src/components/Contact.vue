<template>
    <div>
      <h1>Contact Us</h1>
      <form @submit.prevent="submitForm">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
  
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
  
        <label for="message">Message:</label>
        <textarea id="message" v-model="message" required></textarea>
  
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  
  @Component
  export default class Contact extends Vue {
    name: string = ''
    email: string = ''
    message: string = ''
  
    submitForm() {
      // Send the form data to an API or email service
      console.log(this.name, this.email, this.message)
    }
  }
  </script>
  