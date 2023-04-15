<template>
  <v-app>
    <ONavbar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import ONavbar from '@/components/shared/organisms/ONavbar.vue';

export default {
  name: 'App',
  components: {
    ONavbar,
  },
};
</script>
