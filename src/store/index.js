import Vue from "vue"
import Vuex from "vuex"
import createVuexPersisted from "vuex-persistedstate"
import main from "./modules/main"
import color from "./modules/color"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    main: main,
    color: color,
  },
  plugins: [createVuexPersisted()],
})
