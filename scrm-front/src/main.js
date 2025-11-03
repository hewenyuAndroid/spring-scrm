import {createApp} from 'vue'
// 导入 css 样式，不需要 from 子句
// import './style.css'
// 从 element-plus 框架导入 ElementPlus 组件
import ElementPlus from 'element-plus'
// 导入 element-plus 的 css 样式，不需要 from 子句
import 'element-plus/dist/index.css'
// import App from './App.vue'
import LoginView from './view/LoginView.vue'

// createApp(App).mount('#app')
createApp(LoginView).use(ElementPlus).mount('#app')
