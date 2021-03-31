<template>
    <div  class="grid">
      <div v-for="(item, index) in 1" :key="index" class="box">
        <img :src="data.url" />
        <span class="imgspan">{{ data.title }}</span>
      </div>
    </div>

</template>


<script setup>
import { reactive, getCurrentInstance, ref } from "vue";
import { useServerAPI, useServerData } from "fastify-vite/hooks";
let about = false;
let imgData = [];
const api = useServerAPI();
const data = await useServerData(async () => {
  var x = await api.imageGet();

  
  return x.json;
});
</script>

<style scoped>
h1,
img {
  max-height: inherit;
  max-width: 300px;
}
a {
  text-decoration: none;
}
.box {
  display: block;
  width: 300px;
  margin-bottom: 5px;
}
.imgspan {
  font-weight: 400;
}
</style>
