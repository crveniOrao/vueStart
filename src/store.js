import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    posts: []
  },
  actions: {
    loadPosts: ({ commit }) => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
          commit('setPost', { list: res.data })
        })
    }
  },
  mutations: {
    setPost: (state, {list}) => {
      state.posts = list
    }
  },
  getters: {
  }
})
export default store
