import { createStore } from 'vuex';

export default createStore({
  state: {
    token: ''
  },
  getters: {
    getToken: state => state.token
  },
  mutations: {
    setToken(state, value) {
      state.token = value;
    }
  }
})