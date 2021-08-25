<template>
  <div >
    <h1>{{ name }}</h1>

    <ul>
      <li>Temps: {{ weather }}</li>
      <li>Température: {{ temperature }}</li>
      <li>Date: {{ dateFormate }}</li>
    </ul>
  </div>

</template>


<script>


import {format} from "timeago.js";

export default {
  name: 'City',
  props:['name','weather','temperature','updatedAt'],
  computed:{
    dateFormate(){
      return format(this.updatedAt,"fr_FR")
    }
  }

};
</script>