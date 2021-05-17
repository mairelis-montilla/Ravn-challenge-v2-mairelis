<template>
  <article  class="card">
  <div class="card-info">
  <h2 >{name}</h2>
  <h2 class="h2-low_emphasis"> {specie} from {planeta}</h2>
  </div>
  <p> > </p>
  </article>
</template>

<script scoped>
  export default {
  name:'Card',
}
</script>

<style >
.card{
  display:flex;
  margin: 0;
  width: 375px;
  height: 59px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.card-info{
  padding:5px;
  flex-direction:column;
  align-content:center;
  width:90%;
}
h2{
color:#333333;
font-size:17px;
margin:0;
padding:0;
}
.h2-low_emphasis{
  color:#828282;
  font-size:14px;
}
p{
  font-weight: bold;
  font-size:17px;
}

</style>