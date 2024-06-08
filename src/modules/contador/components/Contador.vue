<script setup>
import { ref } from 'vue';
const contador = ref(0);
const Aumentar = () => {
  contador.value++;
}
const Disminuir = () => {
  contador.value--;
}
</script>

<template>
  <h1>Hola Mundo</h1>
  <p>{{ contador }}</p>
  <button id="aumentar" @click="Aumentar">Aumentar</button>
  <button @click="Disminuir">Disminuir</button>
</template>

<style scoped>
p {
  font-size: 2rem;
  color: red;
}

#aumentar {
  display: inline;
  margin-right: 10px;
}
</style>
