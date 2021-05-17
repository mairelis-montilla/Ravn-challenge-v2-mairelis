<template>
<section class="header-container">
<h2>
People of Start Wars
</h2>

</section>

</template>

<script>
  export default {
    name:'Header',
  }
</script>

<style scoped>
.header-container{
  background-color:#121212;
  height: 90px;
  position:relative;
  top:-8px;
  left:-8px;
  width: 100vw;
}
.header-container >h2{
  color:white;
  display:flex;
  justify-content:center;
  font-size:17px;
  margin: 0;
  padding:30px;
}
</style>