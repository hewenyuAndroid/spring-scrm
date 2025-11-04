<template>

  <el-container>
    <!--
      左侧
    -->
    <el-aside width="200px">
      <img src="../assets/loginBox.svg">
      <p class="loginLogoText">欢迎使用SCRM系统</p>
    </el-aside>
    <!--
      右侧
    -->
    <el-main>

      <div class="loginTitle">欢迎登陆</div>

      <el-form ref="loginRefForm" :model="loginUser" label-width="120px" :rules="loginRules">
        <!--
          step2: 在需要校验字段的 el-form-item 上增加 prop 属性
        -->
        <el-form-item label="账号" prop="loginAcct">
          <el-input v-model="loginUser.loginAcct"/>
        </el-form-item>

        <el-form-item label="密码" prop="loginPwd">
          <el-input type="password" v-model="loginUser.loginPwd"/>
        </el-form-item>

        <el-form-item>
          <el-checkbox label="记住密码" name="rememberPwd"/>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="doLogin">登 录</el-button>
        </el-form-item>

      </el-form>
    </el-main>
  </el-container>

</template>

<script>
import {defineComponent} from "vue"
import {doPost} from "../http/httpRequest.js";

// 导出当前组件
export default defineComponent({
  // 组件名称
  name: "LoginView",

  // 定义页面使用到的变量
  data() {
    return {
      // 对象变量的定义是一个 {}
      loginUser: {
        // 字符串变量的定义是 ''
        loginAcct: '',
        loginPwd: ''
      },
      // step1:定义登录表单的校验对象
      loginRules: {
        // step3: 定义字段的校验规则，规则可以是多个
        loginAcct: [
          // required: true 输入框不能为空
          // message: '请输入账号' 输入框为空状态的提示语
          // trigger: 'blur' 光标消失的时候触发校验
          {required: true, message: '请输入账号', trigger: 'blur'},
          // 最大，最小长度校验
          // {min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur'},
        ],
        loginPwd: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 6, max: 16, message: '登录密码长度为6-16位', trigger: 'blur'},
        ]
      }
    }
  },

  // 函数定义位置
  methods: {

    // 登录
    doLogin() {
      // 校验参数
      this.$refs.loginRefForm.validate((isValid) => {
        // isValid 是验证表单参数校验后的结果，true 表示验证通过，false 表示验证未通过
        if (isValid) {
          let formData = new FormData();
          formData.append("loginAcct", this.$data.loginUser.loginAcct)
          formData.append("loginPwd", this.loginUser.loginPwd)

          // then 里面使用 => 接收回调
          doPost("/api/login", formData).then((resp) => {
            console.log("登录结果: " + resp)
          })
        }
      });
    }

  }
})
</script>

<style scoped>

.el-aside {
  background-color: #1a1a1a;
  width: 40%;
  /* 内容水平居中显示 */
  text-align: center;
}

/* 右侧高度为屏幕的 100% */
.el-main {
  height: calc(100vh);
}

.el-aside img {
  height: 400px;
}

.el-aside .loginLogoText {
  color: white;
  font-size: 30px;
}

.el-form {
  width: 60%;
  margin: auto;
}

.el-main .loginTitle {
  text-align: center;
  margin-top: 100px;
  margin-bottom: 40px;
  font-weight: bold;
  font-size: 25px;
}

.el-button {
  width: 100%;
}

</style>