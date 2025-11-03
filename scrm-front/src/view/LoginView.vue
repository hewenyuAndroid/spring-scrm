<template>

  <el-container>
    <!--
      左侧
    -->
    <el-aside width="200px">
      <img src="../assets/loginBox.svg">
      <p class="loginTitle">欢迎使用SCRM系统</p>
    </el-aside>
    <!--
      右侧
    -->
    <el-main>Main</el-main>
  </el-container>

</template>

<script>
import {defineComponent} from "vue"

// 导出当前组件
export default defineComponent({
  // 组件名称
  name: "LoginView"
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

.el-aside .loginTitle {
  color: white;
  font-size: 30px;
}

</style>