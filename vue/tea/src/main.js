import Vue from '../node_modules/vue/src/core/instance/index.js'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
