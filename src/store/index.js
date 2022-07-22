import { createStore } from 'vuex'

export default createStore({
  state: {
    org: [],
    sortOptions: [
      { value: "0+", name: "0+"},
      { value: "6+", name: "6+"},
      { value: "12+", name: "12+"},
      { value: "16+", name: "16+"},
      { value: "18+", name: "18+"},
    ],
  },
  mutations: {
    setOrg(state, org) {
      state.org = org
    }
  },
  actions: {
    createEvent({ state, commit }) {
      commit('setOrg', state.org)
      console.log(state.org)
    }
  },
  modules: {
  }
})
