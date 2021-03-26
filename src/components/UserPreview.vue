<template>
  <div class="card">
    <img :src="user.avatar_url" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ user.login }}</h5>
      <router-link
        class="btn btn-primary stretched-link"
        :to="{
          name: 'Details',
          params: {
            login: user.login,
          },
        }"
        >Details</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "UserPreview",
  props: {
    user: Object,
  },
};
</script>