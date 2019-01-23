import Vue from 'vue'
import App from './App'


// 引入vuex
import store from './store/index'
// 接口请求
import interfaces from './utils/interfaces'

Vue.prototype.$store = store
Vue.prototype.$interfaces = interfaces

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
