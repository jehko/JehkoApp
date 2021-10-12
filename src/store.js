import { createStore } from 'vuex';

export default createStore({
  state: {
  },
  getters: {
    getToken: () => (sessionStorage.getItem('token') || '')
  },
  mutations: {
    setToken(state, value) {
      sessionStorage.setItem('token', value);
    }
  }
})