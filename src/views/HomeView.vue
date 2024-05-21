<template>
  <div class="home">
    <div class="head">
      <h1>Home contnet</h1>
      <button @click="changeButton" class="button">{{buttonName}}</button>
    </div>
    <div v-if="showAboutpage">
      <About></About>
    </div>
  </div>
</template>

<script>
import About from '../components/About'
import { ref ,computed} from 'vue'
export default {
  components: {
    About },
  setup(){
    let showAboutpage =ref(false);
    let isActive =ref(false)
    let changeButton=()=>{
      showAboutpage.value =! showAboutpage.value;
      isActive.value =! isActive.value
    }
     const buttonName = computed(() => (isActive.value ? 'Close' : 'About Us'));
    
    return {showAboutpage,buttonName,changeButton}
  }
  
}
</script>
<style>
.head{
  display: flex;
  justify-content: space-between;
  /* padding: 20px; */
  margin: 0 auto;
  align-items: center;
  max-width: 1200px;
}
.button{
  background-color:rgb(10, 107, 91);
  color: white;
  font-weight: bold;
  border: 1px solid black;
  border-radius: 15px;
  padding: 10px;
  margin: 0;
  font-size: 18px;
  border: none;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  transition: background-color 0.3s; ;
}
.button:hover{
  background-color: #45a049;
}
h1{
  color: #0092ef;
}
</style>