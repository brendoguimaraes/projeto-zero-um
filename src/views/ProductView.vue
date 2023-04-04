<template>
  <div class="product-view">
    <p>Product</p>
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col
          v-for="item in productSetup.items"
          :key="item.name"
          cols="12"
          sm="4"
        >
          <v-card class="pa-2" outlined tile>
            <p>{{ item.name }}</p>
            <p>{{ item.species }}</p>
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              max-height="150"
              max-width="250"
              :src="item.image"
            ></v-img>
          </v-card>
          <v-card class="pa-2" outlined tile> Quadro </v-card>
          <v-card class="pa-2" outlined tile> R$500</v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'ProductView',
  computed: {
    ...mapState('productStore', ['productSetup']),
  },
  async created() {
    await this.onFetchProduct();
  },
  methods: {
    ...mapActions('productStore', ['fetchProduct']),

    async onFetchProduct() {
      try {
        await this.fetchProduct();
        console.log('success');
      } catch (error) {
        console.log('erro: ', error);
      }
    },
  },
};
</script>

<style lang="css" scoped>
.product-view {
}
</style>
