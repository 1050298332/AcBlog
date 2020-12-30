<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="">
      </div>
      <!-- 登录表单区域 -->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFromRules" label-width="0px" class="login_form">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user" placeholder="账号"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password" prefix-icon="iconfont icon-3702mima" placeholder="密码"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button :plain="true" type="primary" @click="login">登录</el-button>
          <el-button :plain="true" type="success">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import {
    login
  } from "@/api/user.js"
  export default {
    data() {
      return {
        //这是登录表单
        loginForm: {
          username: 'admin',
          password: '123456',
        },
        //这是表单的验证
        loginFromRules: {
          username: [{
            required: true,
            message: '请输入账号',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }]
        }
      };
    },
    methods: {
      login() {
        this.$refs.loginFormRef.validate(async valid => {
          if (!valid) return;
          login(this.loginForm).then(res => {
            console.log(res)
            if (res.data.state == 1) {
              this.$message({
                type: "success",
                message: '登录成功!'
              })
                        // //保存token到客户端 sessionStorage中
               window.sessionStorage.setItem("token", res.data.message);

               // //跳转到主页
               this.$router.push('/home');
            }else {
              this.$message({
                type: "warning",
                message: res.data.message
              })

            }
          })
        });
      }
    }
  };
</script>

<style lang="less" scoped>
  .login_container {
    height: 100%;
    background: url('http://mccsdl.top/images/1.jpg') center center no-repeat;
    background-size: cover;
  }

  .login_box {
    width: 450px;
    height: 380px;
    background-color: #e0fffea8;
    border-radius: 15px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 6px solid #b8d0cf;

    .avatar_box {
      height: 132px;
      width: 132px;
      border: 1px solid #c2c2c2;
      border-radius: 50%;
      padding: 6px;
      box-shadow: 0 0 10px #c3c3c3;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #aea4a2;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #fff;
      }
    }

    .login_form {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 0 20%;
      box-sizing: border-box;
      transform: translate(0%, -30%);
    }

    .btns {
      display: fles;
      justify-content: flex-end;
      transform: translate(20%);
    }
  }
</style>
