<template>
  <div class="login-form">Login.vue
    <form @submit.prevent="onSubmit">
      <div>
        <label for="login-id">id</label>
        <input id="login-id" type="text" v-model="id" />
      </div>
      <div>
        <label for="pw">pw</label>
        <input id="login-pw" type="password" v-model="password" />
      </div>
      <button type="submit">로그인</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    id: '',
    password: ''
  }),
  components: {
    
  },
  methods: {
    onSubmit () {
      const payload = { id: this.id, password: this.password }
      // action="http://localhost:8080/api/v1/auth/login"

      this.axios.post('http://localhost:8080/api/v1/auth/login', payload).then(res => {
        console.log(res.data);
        this.axios.get('http://localhost:8080/api/v1/member/myinfo', {headers: {Authorization: 'Bearer ' + res.data.token}}).then(rs => {
          console.log(rs.data);
        });
      })
    }
  }
}
</script>

<style scoped>
.login-form {
  margin: 0 auto;
  width: 320px;
  height: 480px;
  border: 1px solid red;
}
</style>
