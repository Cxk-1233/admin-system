import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 循环引入所有element icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    createApp(App).component(key, component)
}

createApp(App)
    .use(router)
    .use(store)
    .mount('#app');
