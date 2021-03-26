<template>
  <div>
    <div class="spinner-border" role="status" v-if="!getPagedUsers.length">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="row">
      <Pagination :numPages="getNumPages" />
    </div>
    <div class="row">
      <div
        class="col-6 col-lg-4 mb-4"
        v-for="user in getPagedUsers"
        :key="user.id"
      >
        <UserPreview :user="user" />
      </div>
    </div>
    <div class="row">
      <Pagination :numPages="getNumPages" />
    </div>
  </div>
</template>

<script>
import UserPreview from "./UserPreview.vue";
import Pagination from "./Pagination.vue";
import { mapGetters } from "vuex";
import { ACTION_APP_GET_USERS } from "./../store/app.store";

export default {
  name: "Users",
  components: {
    Pagination,
    UserPreview,
  },
  computed: {
    getNumPages: function () {
      return parseInt(
        Math.ceil(this.getUsers ? this.getUsers.length / this.getNumPerPage : 0)
      );
    },
    ...mapGetters(["getNumPerPage", "getUsers"]),
    getPagedUsers() {
      return (
        (this.getUsers &&
          this.getUsers.filter((user, i) => {
            return (
              i < this.getNumPerPage * this.currentPage &&
              i >= this.getNumPerPage * this.currentPage - this.getNumPerPage
            );
          })) ||
        []
      );
    },
  },
  data() {
    return {
      currentPage: this.$route.params.page || 1,
    };
  },
  beforeMount() {
    this.$store.dispatch(ACTION_APP_GET_USERS);
  },
  watch: {
    "$route.params.page": {
      handler: function (page) {
        this.currentPage = page || 1;
      },
    },
  },
};
</script>