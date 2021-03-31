<template>
    <div  class="grid">
      <div v-for="(item, index) in data" :key="index" class="box">
        <img :src="item.url" />
        <span class="imgspan">{{ item.title }}</span>
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
  var t = await api.imageGet();
  return t.json
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
.grid {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  gap: 10px;
}
</style>
