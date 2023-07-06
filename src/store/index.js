import { createStore } from 'vuex'

export default createStore({
  state: {
    totalFromVueX: 0,
  },
  getters: {
    doubleDuTotal(state) {
      return state.totalFromVueX * 2
    }
  },
  mutations: {
    setTotalFromVueX(state, newValue) {
      state.totalFromVueX = newValue
    }
  },
  actions: {
  },
  modules: {
  }
})
