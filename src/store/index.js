import { createStore } from 'vuex'

export default createStore({
  state: {
    org: [],
  },
  mutations: {
    setOrg(state, org) {
      state.org = org
    }
  },
  actions: {
    createEvent({state, commit}) {
      commit('setOrg', state.org)
      console.log(state.org)
    }
  },
  modules: {
  }
})
