<template>
  <div class="container">
    <PageHead />
    <div role="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import PageHead from "./components/PageHead.vue";
export default {
  name: "App",
  components: {
    PageHead,
  },
};
</script>

<style>
@import "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css";
</style>
