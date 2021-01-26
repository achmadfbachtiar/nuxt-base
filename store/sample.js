export default {
    namespaced: true,
    state: {
      list:[],
      detail: {},
    },
    mutations: {
      SET_LIST(state, data) {
        state.list = data
      },
      SET_DETAIL(state, data) {
        state.detail = data
      },
    },
    actions: {
      async getList({ commit }, params) {
        try { 
          const response = await this.$axios.get('/api/v1/list', { params })
          commit('SET_LIST', response)
        } catch (e) {
          // throw new Error(e.response)
          return Promise.reject(e)
        }
      },
      async getDetail({ commit }, params) {
        try {
          const response = await this.$axios.get('/api/v1/detail/' + params.id)
          commit('SET_DETAIL', data)
        } catch (e) {
          // throw new Error(e.response)
          return Promise.reject(e)
        }
      },
      async create({ commit }, payload) {
        try {
          const response = await this.$axios.post('/api/v1/create', payload)
        } catch (e) {
          // throw new Error(e.response)
          return Promise.reject(e)
        }
      },
      async update({ commit }, data) {
        try {
          const response = await this.$axios.put('/api/v1/update/' + data.id, data.payload)
        } catch (e) {
          // throw new Error(e.response)
          return Promise.reject(e)
        }
      },
      async delete({ commit }, params) {
        try {
          const response = await this.$axios.delete('/api/v1/delete/' + params.id)
        } catch (e) {
          // throw new Error(e.response)
          return Promise.reject(e)
        }
      }, 
    },
    getters: {
      
    }
  }
  