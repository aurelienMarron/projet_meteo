<template>
  <div v-for="city in cities">
    <h1>{{ city.name }}</h1>

    <ul>
      <li>Id: {{city.id}}</li>
      <li>Temps: {{city.weather}}</li>
      <li>Température: {{city.temperature}}</li>
      <li>Date: {{city.updatedAt.toLocaleString()}}</li>
    </ul>
  </div>

</template>


<script>

export default {
  name: 'City',
  props:['name','id','weather','temperature','updatedAt'],

};
</script>