import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],

    server: {
        host: '127.0.0.1',  // ip
        port: 8081, // 端口
        open: true  // 配置启动时是否自动打开浏览器
    }
})
