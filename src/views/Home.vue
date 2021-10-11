<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'Home',
  setup() {
    const store = useStore();

    console.log('home>>>', store.state.token)

    return {
      getToken: computed(() => store.getters.getToken),
      setToken: (payload) => store.commit('setToken', payload)
    }
  }
}
</script>

<style lang="scss">

</style>
