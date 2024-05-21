<template>
  <div class="home">
    <div>
      <h2>Home contnet</h2>
    </div>
    <button @click="changeButton">{{buttonName}}</button>
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
