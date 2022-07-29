export default {
  namespaced: true,
  state: {
    randomColor: "",
  },
  mutations: {
    randomColorFn(state) {
      var color = "#"
      for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10)
      }
      state.randomColor = color
    },
  },
  actions: {},
  getters: {},
  modules: {},
}
