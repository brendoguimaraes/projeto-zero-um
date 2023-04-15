import Vue from 'vue';
import Vuex from 'vuex';

import productStore from './modules/productStore';

Vue.use(Vuex);

const useVuex = new Vuex.Store({
  modules: {
    productStore,
  },
});

export default useVuex;
