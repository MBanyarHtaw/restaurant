<template>
 <div class="main">
    <div class="grid first">
        <Services></Services>
    </div>
    <div class="grid second">
        <Photo></Photo>
    </div>
 </div>
</template>

<script>
import Services from './Services'
import Photo from './Photo'
export default {
  components: {
    Services, Photo },

}
</script>

<style>
.main{
    display: flex;
    justify-content: space-between;
    padding: 20px;
}
.grid{
    display: grid;
    grid-column: 60%;
    gap: 20px;
    border: 1px solid white;
    padding: 10px;
    margin:10px;
}


</style>