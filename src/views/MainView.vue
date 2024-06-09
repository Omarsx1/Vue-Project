<script setup>
import Sidebar from "../components/Sidebar.vue";
import Header from "../components/Header.vue";
import { ref } from "vue";

const texto = ref("");
</script>

<template>
  <Header :mensaje="texto" />
  <div class="container">
    <Sidebar />
    <div class="content">
      <input type="text" v-model="texto" />
      {{ texto }}
      <router-view />
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
}
.content {
  flex: 1;
  padding: 20px;
}
</style>
