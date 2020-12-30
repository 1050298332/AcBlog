import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router'
import VueQuillEditor from 'vue-quill-editor'
import "./utils/rem.js";

import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme


import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'
//导入字体图标
import './assets/fonts/iconfont.css'
import axios from 'axios'
//配置请求的根路径  后端接口
import './styles/index.css'

Vue.use(VueQuillEditor, /* { default global options } */)
Vue.config.productionTip = false
Vue.use(VueResource)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
