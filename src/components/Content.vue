<template>
 <div class="main">
    <div class="grid first">
        <h1>This is our content</h1>
    </div>
    <div class="grid second">
        <h1>Tag</h1>
    </div>
 </div>
</template>

<script>
export default {

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
}


</style>