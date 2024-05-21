<template>
  <header>
    <h2>DGM</h2>
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
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin:0 auto;
  padding: 10px;
}
header h2{
  color:goldenrod;
  font-size: 30px;
}
header a{
  color:darkblue;
  text-decoration: none;
  margin-left: 20px;
}
header a.router-link-active{
  color:goldenrod;
  font-weight: bold;
}
</style>