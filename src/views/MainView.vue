<script setup>
    import sidebar from "../components/Sidebar.vue";
</script>

<template>
  <div class="container">
    <sidebar/>
    <div class="content">
        <router-view/>
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
