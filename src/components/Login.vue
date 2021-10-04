<template>
  <div class="login-body">
    <div class="login-form">
      <div class="login-form-main">
        <h1>로그인</h1>
        <form @submit.prevent="onSubmit">
          <div class="input-wrapper">
            <input id="login-id" type="text" v-model="id" placeholder="아이디"/>
          </div>
          <div class="input-wrapper">
            <input id="login-pw" type="password" v-model="password" placeholder="비밀번호"/>
          </div>
          <div class="submit-wrapper">
            <button type="submit">로그인</button>
          </div>
        </form>
      </div>
    </div>
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

      this.axios.post('http://localhost:8080/api/v1/auth/login', payload).then(res => {
        if(res.data?.token) {
          this.$router.push({
            name: 'Home'
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">
.login-body {
  @media only screen and (min-width: 740px) {
    margin: 0 auto -236px;
    // min-height: 100vh;
    background-color: transparent;
    max-width: 450px;
  }
  color: #333;
  padding: 0 5%;
  .login-form {
    background-color: rgba(0, 0, 0, .75);
    border-radius: 4px;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    box-sizing: border-box;
    flex-direction: column;
    margin: 100px 0px;
    width: 100%;
    @media only screen and (min-width: 500px) {
      min-width: 380px;
    }
    @media only screen and (min-width: 740px) {
      min-height: 660px;
      padding: 60px 60px 40px;
      margin-bottom: 90px;
    }
    .login-form-main {
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      flex-grow: 1;
      form {
        margin-bottom: 0;
      }
      h1 {
        color: white;
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 28px;
      }
      input {
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        font-weight: 700;
        background: #e8f0fe;
        line-height: 50px;
        margin: 5px 0px;
        padding: 0 10px;
        width: calc(100% - 20px);
      }
      
      button {
        border-radius: 4px;
        border: 0;
        font-size: 16px;
        font-weight: 700;
        margin: 24px 0 12px;
        @media only screen and (min-width: 360px) {
          width: 100%;
          max-width: 100%;
        }
        @media only screen and (min-width: 500px) {
          padding: 16px;
        }
        background: #e50914;
        color: white;
      }
      
    }
  }
}


</style>
