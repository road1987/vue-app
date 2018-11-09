<template>
  <div class="login-form">
    <mt-field class="margin-top input-field" placeholder="用户名" v-model="username"></mt-field>
    <mt-field class="margin-top input-field" placeholder="密码" type="password" v-modal="password"></mt-field>
    <div class="toolbar-bottom">
      <mt-button class="width-100" type="primary" @click="doLogin">登录</mt-button>
    </div>
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    doLogin () {
      window.isLogin = true
      router.push('/');
    }
  }
}
</script>

<style scoped>
  .margin-top{
    margin-top:10px;
  }
  .margin-top-lg{
    margin-top:10px;
  }
  .margin-bottom{
    margin-bottom:10px;
  }
  .width-100 {
    width : 100%;
  }

  .login-form{
    border : 1px solid #eeeeee;
    border-radius : 5px;
    padding : 20px;
    margin : 0px auto;
    margin-top : 100px;
    background: #ECF6FB;
  }

  .input-field{
    border : 1px solid #eeeeee;
    border-radius : 5px;
  }

  .toolbar-bottom{
    text-align : center;
    margin-top : 20px;
  }
</style>
