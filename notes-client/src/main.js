import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './Store/NoteStore'

Vue.use(Vuex)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
