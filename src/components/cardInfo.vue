<template>
<section>
    <section class="card-info">
    <h2>General Information</h2>
    </section>
      <article class="card-info">
        <h2 class="card-low_emphasis">Eye Color</h2>
        <h2 >{{ people.eyeColor }}</h2>
      </article>

      <article class="card-info">
        <h2 class="card-low_emphasis">Hair Color</h2>
        <h2>{{ people.hairColor }}</h2>
      </article>

      <article class="card-info">
        <h2 class="card-low_emphasis">Skin Color</h2>
        <h2>{{ people.skinColor }}</h2>
      </article>

      <article class="card-info">
        <h2 class="card-low_emphasis">Birth Year</h2>
        <h2>{{ people.birthYear }}</h2>
      </article>

    <section class="card-info">
    <h2>Vehicles</h2>
    </section>
      <article v-if="people.vehicleConnection.vehicles.length > 0">
        <div
          class="card-info card-low_emphasis"
          v-for="vehicle in people.vehicleConnection.vehicles"
        >
          <h2> {{ vehicle.name }}</h2>
        </div>
        </article>
      <article v-else class="card-info card-low_emphasis">

        <h2>No vehicles</h2>

      </article>

  </section>
</template>
<script>
export default {
  name:'CardInfo',
  props:{
    people: {
      type: Object,
      required: true,
    },
    },
    }
</script>
<style scoped>
h2{
text-transform:capitalize;
font-size:17px;
}
.card-low_emphasis{
  color:#828282;
}
.card-info{
  display:flex;
  justify-content:space-between;
  margin:2px 10px;
  padding:5px 25px;
  width:850px;
  height:48px;
}

</style>