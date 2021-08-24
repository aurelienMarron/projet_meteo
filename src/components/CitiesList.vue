<template>
  <div class="hello">
   <City :name="name" :id="id" :weather="weather" :temperature="temperature" :updated-at="dateFormate"/>

  </div>

</template>

<script>
import City from './City.vue'
import { format } from 'timeago.js';

export default {
  name: 'HelloWorld',
  components:{
    City
  },
data(){
  return {
    cities: [
      {
        id: 1,
        name: 'Ville 1',
        weather: 'Ensoleillé',
        temperature: 22.0,
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Ville 2',
        weather: 'Peu nuageux',
        temperature: 19.5,
        updatedAt: new Date()
      }
    ]
  }
},
  computed:{
    dateFormate(){
      return format(this.updatedAt,"fr_FR")
    }
  }

};



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
