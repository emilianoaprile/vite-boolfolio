<template>
    <header>
      <div class="container">
        <nav>
          <ul>
            <li>
              <router-link :to="{ name: 'home' }">Home</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'projects.index'}">Portfolio</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'contacts'}">Contacts</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    mounted() {
      console.log('app header montato')
    },
    unmounted() {
      console.log('app header unmounted')
    }
  }
  </script>
  <style lang="scss" scoped>
  </style>