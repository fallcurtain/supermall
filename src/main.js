import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()//事件总线$bus

new Vue({
  render: h => h(App),
  router:router,
  store:store
}).$mount('#app')
