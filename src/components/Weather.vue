<script setup>
import { useWheather } from '@/composables/useWeather';
import { onMounted } from 'vue';
import { useWeatherStore } from '@/stores/weatherStore';

const weatherStore = useWeatherStore();

onMounted(() => {
    useWheather();
});

</script>

<template>
  <h3>La temperatura actual es: {{ weatherStore.temperatura }}° </h3> 
</template>

<style scoped>

</style>