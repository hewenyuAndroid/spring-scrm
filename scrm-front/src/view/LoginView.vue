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

      <el-form :model="form" label-width="120px">
        <el-form-item label="账号">
          <el-input v-model="form.name"/>
        </el-form-item>

        <el-form-item label="密码">
          <el-input v-model="form.name"/>
        </el-form-item>

        <el-form-item>
          <el-checkbox label="记住密码" name="rememberPwd"/>
        </el-form-item>

        <el-form-item>
          <el-button type="primary">登  录</el-button>
        </el-form-item>

      </el-form>
    </el-main>
  </el-container>

</template>

<script>
import {defineComponent} from "vue"

// 导出当前组件
export default defineComponent({
  // 组件名称
  name: "LoginView",

  // 定义页面使用到的变量
  data() {
    return {
      // 对象变量的定义是一个 {}
      form: {
        // 字符串变量的定义是 ''
        name: ''
      }
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