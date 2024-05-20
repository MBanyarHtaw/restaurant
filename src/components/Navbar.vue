<template>
  <header>
    <h2>DAGON-MAUNG</h2>
    <nav>
        <router-link :to="{name:'home'}">Home</router-link> |
        <router-link :to="{name:'about'}">About</router-link> |
        <router-link :to="{name:'contact'}">Contact</router-link> 
  </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style scrope>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: goldenrod;
}
</style>