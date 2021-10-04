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

<style lang="scss">
.main {
  background-image: url(../assets/img/background.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
