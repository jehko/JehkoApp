<template>
  <div class="main">
    <Login></Login>
  </div>
</template>

<script>
import Login from "@/components/Login.vue"

export default {
  name: 'Main',
  components: {
    Login
  }
}
</script>

<style lang="scss" scoped>
.main {
  // background-color: red;
}
</style>
