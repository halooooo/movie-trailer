import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'common/js/axios'
import VueLazyload from 'vue-lazyload'

import 'common/styles/reset.styl'

Vue.use(axios)
Vue.use(VueLazyload, {
  loading: require('common/images/loading.png')
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
