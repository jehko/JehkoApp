<template>
  <div class="main">
    Main.vue
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

<style>
.main {
  width: 800px;
  height: 600px;
  border: 1px solid black;
}
</style>
