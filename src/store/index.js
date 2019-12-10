import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import filters from './modules/filters'
import pagination from './modules/pagination'

Vue.use(Vuex)

const api_url = 'http://185.185.69.80:8082'

export default new Vuex.Store({
  state: {
    isLoaded: false,
    list: []
  },
  getters: {
    IS_LOADED: state => state.isLoaded
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    filters,
    pagination
  }
})
