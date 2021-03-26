<template>
  <div>
    <div class="spinner-border" role="status" v-if="!getActiveUser">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="row mb-2" v-if="getActiveUser">
      <div class="col-3">
        <img
          :src="getActiveUser.avatar_url"
          class="card-img-top bordered-img"
          alt="..."
        />
      </div>
      <div class="col-9 col-sm-8">
        <div class="row mb-2">
          <div class="col">
            <span class="badge badge-primary">
              {{ getActiveUser.followers }} Followers
            </span>
            <span class="badge badge-secondary">
              Following {{ getActiveUser.following }}
            </span>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col">
            <h3>{{ getActiveUser.name || getActiveUser.login }}</h3>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col">
            <a href="#" v-on:click="goBack">&laquo; Back to users list</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { ACTION_APP_GET_USER_DETAILS } from "./../store/app.store";
export default {
  name: "UserDetails",
  computed: {
    ...mapGetters(["getActiveUser"]),
  },
  methods: {
    goBack: function () {
      this.$router.go(-1);
    },
  },
  beforeMount() {
    const { login } = this.$route.params;
    this.$store.dispatch(ACTION_APP_GET_USER_DETAILS, login);
  },
};
</script>

<style>
.bordered-img {
  border: 11px solid #333;
  border-radius: 50%;
}
@media only screen and (max-width: 768px) {
  .bordered-img {
    border: 6px solid #333;
  }
}
</style>