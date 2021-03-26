import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './src/App.vue';
import routes from './src/routes';
import store from './src/store/index';

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')