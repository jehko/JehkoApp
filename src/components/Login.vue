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
        <div class="login-others">
          <p>다른 방법으로 로그인</p>
          <ul class="login-others-list">
            <li class="login-others-item"><button class="login-kakao"></button></li>
            <li class="login-others-item"><button class="login-google"></button></li>
            <li class="login-others-item"><button class="login-naver"></button></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'Login',
  setup() {
    const store = useStore();

    return {
      getToken: computed(() => store.getters.getToken),
      setToken: (payload) => store.commit('setToken', payload)
    }
  },
  data: () => ({
    id: '',
    password: ''
  }),
  components: {
    
  },
  methods: {
    onSubmit () {
      const _ = this;
      const payload = { id: _.id, password: _.password }

      _.axios.post(`${process.env.VUE_APP_BASE_URL_API}/v1/auth/login`, payload).then(res => {
        if(res.data?.token) {
          _.setToken(res.data.token);
          _.$router.push({
            name: 'Home'
          })
        }
      });
    }
  }
}
</script>

<style lang="scss">
.login-body {
  @media only screen and (min-width: 740px) {
    margin: 0 auto -236px;
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
      padding: 30px 40px;
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
      .input-wrapper input {
        border: 0;
        border-radius: 4px;
        box-sizing: border-box;
        font-size: 16px;
        font-weight: 700;
        background: #e8f0fe;
        line-height: 50px;
        margin: 5px 0px;
        padding: 0 10px;
        width: 100%;
      }
      
      .submit-wrapper button {
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
  .login-others {
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    margin-top: 10px;
    p {
      padding: 10px 0;
      color: white;
      font-size: 14px;
    }
    .login-others-list {
      .login-others-item {
        float: left;
        margin-right: 10px;
        button {
          width: 42px;
          height: 42px;
          border: 0;
          border-radius: 50%;
          background-position: center;
          &.login-kakao {
            background-image: url(../assets/img/icon/kakao-icon.png);
            background-size: 130%;
            background-position: 30% 50%;
          }
          &.login-google {
            background-image: url(../assets/img/icon/google-icon.png);
            background-size: 130%;
          }
          &.login-naver {
            background-image: url(../assets/img/icon/naver-icon.png);
            background-size: 130%;
          }
        }
      }
    }
  }
}
</style>
