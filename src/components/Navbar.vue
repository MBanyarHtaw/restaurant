<template>
  <header>
    <h1>DGM</h1>
    <nav>
        <router-link :to="{name:'home'}">Home</router-link> |
        <router-link :to="{name:'menu'}">Menu</router-link> |
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
header h1{
  color:goldenrod;
  font-size: 30px;
}
header a{
  color:rgb(250, 250, 252);
  text-decoration: none;
  margin-left: 48px;
  font-size: 18px;
}
header a.router-link-active{
  color:goldenrod;
  font-weight: bold;
  border-bottom: 1px solid white;
}
</style>