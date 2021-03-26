import Vue from 'vue'
import Vuex from 'vuex'
import app from './app.store'
import axios from 'axios'

Object.defineProperty(Vue.prototype, 'axios', {
    value: axios
});

Vue.use(Vuex)

const store = new Vuex.Store({
  debug: false,
  modules: {
    app
  }
})

export default store
