import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './plugins/element.js'

import './assets/styles/element/index.css'
import './assets/styles/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
