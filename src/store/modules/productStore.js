import api from '@/providers';

export default {
  namespaced: true,
  state: {
    productSetup: {
      currentPage: 0,
      items: [],
    },
  },
  mutations: {
    SET_PRODUCT_SETUP(state, payload) {
      state.productSetup.items = payload.results;
    },
  },

  actions: {
    async fetchProduct({ commit }) {
      const response = await api.productProvider.getAll();
      console.log(response);

      commit('SET_PRODUCT_SETUP', response);
    },
  },
};
