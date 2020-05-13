import apiRequest from "../helpers/apiRequest";
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    notes: []
  },
  mutations: {
    setNotes(state, notes) {
      state.notes = notes;
    }
  },
  getters: {
    getNotes(state) {
      return state.notes;
    }
  },
  actions: {
    fetchList({commit}) {
      apiRequest.get('/note').then((response) => {
        commit('setNotes', response.data);
      })
    },
    storeNew({dispatch}, payload) {
      apiRequest.post('/note', payload).then((response) => {
        dispatch('fetchList');
      })
    },
    deleteNote({dispatch}, payload) {
      apiRequest.delete(`/note/${payload.id}`).then((response) => {
        dispatch('fetchList');
      })
    }
  }
});

export default store;
